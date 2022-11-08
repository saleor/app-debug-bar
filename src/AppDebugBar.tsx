import React, { HTMLAttributes, useEffect, useState } from "react";

import { atom, useAtom } from "jotai";
import {
  AppBridge,
  AppBridgeProvider,
  useAppBridge,
} from "@saleor/app-sdk/app-bridge";
import { ButtonIIcon } from "./ButtonIIcon";
import { WebhookFailedInvocationsList } from "./WebhookFailedInvocationsList";

const openState = atom(false);

const FloatingIcon = (props: HTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    style={{
      color: "#056DFF",
      position: "fixed",
      bottom: 20,
      right: 20,
      width: 50,
      height: 50,
      borderRadius: 50,
      border: "1px solid #056DFF",
      background: "#f4f4f455",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    }}
  />
);

const Modal = (props: { data: any }) => {
  console.log(props);
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 100,
        background: "#f4f4f455",
        width: 400,
        borderRadius: 5,
        padding: 20,
        border: "1px solid #056DFF",
        maxHeight: "calc(100vh - 100px)",
        zIndex: 999,
        backdropFilter: "blur(5px)",
      }}
    >
      <h2>Failed webhooks history</h2>
      <WebhookFailedInvocationsList webhooks={[]} />
    </div>
  );
};

type Props = {
  appBridge?: AppBridge;
};

const Bar = () => {
  const [open, setOpen] = useAtom(openState);
  const { appBridgeState } = useAppBridge();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!appBridgeState?.domain) {
      return;
    }

    fetch(`https://${appBridgeState?.domain}/graphql/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${appBridgeState?.token!}`,
      },
      body: JSON.stringify({
        query: `
        query FetchWebhookData($id: ID!){
          app(id: $id){
          id
          manifestUrl
          name
          webhooks {
            id
            name
            isActive
            asyncEvents {
              name
              eventType
            }
            targetUrl
            subscriptionQuery
            eventDeliveries(first: 10) {
              edges {
                node {
                  createdAt
                  status
                  eventType
                  attempts(first: 1) {
                    edges {
                      node {
                        createdAt
                        response
                        responseStatusCode
                        status
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
        variables: {
          id: appBridgeState?.id,
        },
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [appBridgeState?.domain]);

  // check ready field, but its always false
  if (!appBridgeState || !appBridgeState?.id) {
    return null;
  }

  return (
    <>
      <FloatingIcon onClick={() => setOpen((state: boolean) => !state)}>
        <ButtonIIcon width="100%" height="100%" />
      </FloatingIcon>
      {open && <Modal data={data} />}
    </>
  );
};

export const AppDebugBar = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AppBridgeProvider appBridgeInstance={props.appBridge}>
      {mounted && <Bar />}
    </AppBridgeProvider>
  );
};

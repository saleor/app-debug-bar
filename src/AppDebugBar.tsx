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
      color: "red",
      position: "fixed",
      bottom: 20,
      right: 20,
      width: 50,
      height: 50,
      borderRadius: 50,
      border: "1px solid red",
      background: "#f4f4f455",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    }}
  />
);

const Modal = () => {
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
        border: "1px solid red",
        maxHeight: "calc(100vh - 100px)",
      }}
    >
      <h2>Failed webhooks history</h2>
      <WebhookFailedInvocationsList
        webhooks={[
          {
            event: "ORDER_CREATED",
            invocations: [
              {
                timestamp: new Date().toISOString(),
                status: "FAILED",
                code: 404,
              },
            ],
          },
          {
            event: "ORDER_FULFILLED",
            invocations: [
              {
                timestamp: new Date().toISOString(),
                status: "FAILED",
                code: 405,
              },
              {
                timestamp: new Date().toISOString(),
                status: "FAILED",
                code: 400,
              },
            ],
          },
        ]}
      />
    </div>
  );
};

type Props = {
  appBridge?: AppBridge;
};

const Bar = () => {
  const [open, setOpen] = useAtom(openState);
  const { appBridgeState } = useAppBridge();

  // check ready field, but its always false
  if (!appBridgeState || !appBridgeState?.id) {
    return null;
  }

  return (
    <>
      <FloatingIcon onClick={() => setOpen((state: boolean) => !state)}>
        <ButtonIIcon width="100%" height="100%" />
      </FloatingIcon>
      {open && <Modal />}
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

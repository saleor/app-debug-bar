import React, { HTMLAttributes } from "react";

import { atom, useAtom } from "jotai";
import { atomWithLocalStorage } from "./atom-with-persistence";
import {
  AppBridge,
  AppBridgeProvider,
  useAppBridge,
} from "@saleor/app-sdk/app-bridge";

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
      }}
    >
      modal
    </div>
  );
};

type Props = {
  appBridge?: AppBridge;
};

const Bar = () => {
  const [open, setOpen] = useAtom(openState);
  const { appBridgeState } = useAppBridge();

  console.log(appBridgeState);

  // check ready field, but its always false
  if (!appBridgeState || !appBridgeState?.id) {
    return (
      <FloatingIcon onClick={() => setOpen((state: boolean) => !state)}>
        Icon
      </FloatingIcon>
    );
  }

  return (
    <>
      <FloatingIcon onClick={() => setOpen((state: boolean) => !state)}>
        Icon
      </FloatingIcon>
      {open && <Modal />}
    </>
  );
};

export const AppDebugBar = (props: Props) => {
  return (
    <AppBridgeProvider appBridgeInstance={props.appBridge}>
      <Bar />
    </AppBridgeProvider>
  );
};

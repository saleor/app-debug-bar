import React, { HTMLAttributes } from "react";

import { atom, useAtom } from "jotai";
import { atomWithLocalStorage } from "./atom-with-persistence";
import { AppBridge } from "@saleor/app-sdk/app-bridge";

const openState = atom(false);

const FloatingIcon = (props: HTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    style={{
      color: "white",
      position: "fixed",
      bottom: 20,
      right: 20,
      width: 50,
      height: 50,
      borderRadius: 50,
      border: "1px solid #f4f4f4",
      background: "#f4f4f455",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    icon
  </button>
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

export const AppDebugBar = (props: Props) => {
  const [open, setOpen] = useAtom(openState);

  console.log(props.appBridge);

  return (
    <>
      <FloatingIcon onClick={() => setOpen((state: boolean) => !state)} />
      {open && <Modal />}
    </>
  );
};

import React, { HTMLAttributes } from "react";

import { atom, useAtom } from "jotai";

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
  aplApiUrl: string;
};

export const AppDebugBar = (props: Props) => {
  const [open, setOpen] = useAtom(openState);

  return (
    <>
      <FloatingIcon onClick={() => setOpen((state) => !state)} />
      {open && <Modal />}
    </>
  );
};

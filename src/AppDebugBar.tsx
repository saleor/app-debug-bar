import React from 'react';

import { atom, useAtom } from 'jotai';

const openState = atom(false);

const FloatingIcon = () => <div style={{ color: 'white' }}>icon</div>;

export const AppDebugBar = () => {
  const [open, setOpen] = useAtom(openState);

  if (!open) {
    return <FloatingIcon />;
  }
};

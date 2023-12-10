"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

function ButtonComponent({ children }) {
  return (
    <Button color="primary" onClick={() => signIn()}>
      {children}
    </Button>
  );
}

export default ButtonComponent;

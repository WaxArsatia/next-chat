"use client";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

function SignOutButton({ children }) {
  return (
    <Button color="primary" onClick={() => signOut({ callbackUrl: "/" })}>
      {children}
    </Button>
  );
}

export default SignOutButton;

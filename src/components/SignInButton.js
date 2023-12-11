"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

function SignInButton({ children }) {
  return (
    <Button
      color="primary"
      onClick={() => signIn(null, { callbackUrl: "/chat" })}
    >
      {children}
    </Button>
  );
}

export default SignInButton;

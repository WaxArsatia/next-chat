import SignOutButton from "@/components/SignOutButton";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Chat() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="h-screen bg-slate-700">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div>
          <Card>
            <CardHeader>
              <span className="text-2xl font-semibold">
                {session.user.name}
              </span>
            </CardHeader>
            <CardBody>
              <Image
                src={session.user.image}
                alt="User Photo Profile"
                width={200}
              />
            </CardBody>
          </Card>
        </div>
        <div>
          <SignOutButton>Sign Out</SignOutButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;

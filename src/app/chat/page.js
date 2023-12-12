import MessageBody from "@/components/MessageBody";
import MessageInput from "@/components/MessageInput";
import SignOutButton from "@/components/SignOutButton";
import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Chat() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="h-screen bg-slate-700">
      <div className="container flex h-full py-16 mx-auto">
        <div className="flex flex-col items-center gap-4 min-w-fit">
          <div>
            <Card>
              <CardBody>
                <div className="flex items-center justify-center w-full gap-2">
                  <Avatar
                    src={session.user.image}
                    name={session.user.name}
                    size="lg"
                  />
                  <span className="text-2xl font-medium">
                    {session.user.name}
                  </span>
                </div>
              </CardBody>
            </Card>
          </div>
          <div>
            <SignOutButton>Sign Out</SignOutButton>
          </div>
        </div>
        <div className="flex flex-col w-full h-full gap-4 px-8">
          <Card className="h-full">
            <CardHeader>
              <div className="flex flex-col w-full gap-2">
                <span className="text-xl">Public Temporary Message</span>
                <Divider />
              </div>
            </CardHeader>
            <CardBody>
              <MessageBody
                name={session.user.name}
                image={session.user.image}
              />
            </CardBody>
          </Card>
          <MessageInput name={session.user.name} image={session.user.image} />
        </div>
      </div>
    </div>
  );
}

export default Chat;

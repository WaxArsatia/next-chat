import MessageBody from "@/components/MessageBody";
import MessageInput from "@/components/MessageInput";
import SignOutButton from "@/components/SignOutButton";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
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
                  <Image
                    src={session.user.image}
                    alt="User Photo Profile"
                    radius="full"
                    width={70}
                    height={70}
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
        <div className="w-full h-full px-8">
          <Card className="h-full">
            <CardHeader>
              <div className="flex flex-col w-full gap-2">
                <span className="text-xl">Public Temporary Message</span>
                <Divider />
              </div>
            </CardHeader>
            <CardBody>
              <MessageBody />
            </CardBody>
            <CardFooter>
              <div className="flex flex-col w-full gap-4">
                <Divider />
                <MessageInput name={session.user.name} />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Chat;

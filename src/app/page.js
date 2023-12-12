import SignInButton from "@/components/SignInButton";
import { Image } from "@nextui-org/react";

async function Home() {
  return (
    <div className="h-screen bg-slate-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-8">
          <div>
            <span className="text-4xl font-bold text-blue-700">NTMP</span>
          </div>
          <div>
            <SignInButton>Open Chat</SignInButton>
          </div>
        </div>
        <div className="flex items-center justify-between py-24">
          <div className="w-full">
            <div>
              <span className="text-3xl font-semibold">
                Nirwana <span className="text-blue-700">Temporary Message</span>{" "}
                Platform
              </span>
            </div>
            <div className="flex flex-col w-2/3 gap-4 py-4">
              <p>
                Project ini adalah sebuah message platform yang mengusung ide
                end to end message, yang mana pesan yang dikirimkan tidak akan
                tersimpan di database maupun server, pesan hanya dapat
                dikirimkan kepada user yang sedang online, dan pesan akan hilang
                tiap reload page. Project ini hanya ide iseng yang muncul disaat
                gabut Denis Arsyatya a.k.a{" "}
                <span className="font-semibold text-blue-700">WaxArsatia</span>{" "}
                :)
              </p>
              <span className="text-slate-600 text-large">
                (Note: Project ini sama sekali tidak menggunakan database)
              </span>
            </div>
            <div className="py-4">
              <SignInButton>Get Started</SignInButton>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <Image
              height={500}
              width={500}
              src="/undraw_mobile_messages.svg"
              alt="Hero Section Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

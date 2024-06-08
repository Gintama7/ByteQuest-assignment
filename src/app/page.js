import Image from "next/image";
import Middle from "./components/Middle";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 bg-black text-[#E5DFD9]">
      <Header/>
     <Middle/>
    </main>
  );
}

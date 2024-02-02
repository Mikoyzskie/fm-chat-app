import Image from "next/image";
import Phone from "@/components/Phone";

export default function Home() {
  return (
    <main className="flex items-center gap-16 md:gap-[125px] z-20 md:flex-row flex-col">
      <Phone />
      <div className="flex flex-col gap-6 text-center md:text-start">
        <h1 className="text-[40px] text-[#3E2753] font-semibold">
          Simple booking
        </h1>
        <p className="md:max-w-[445px] max-w-[311px] w-full text-base leading-[28px] text-[#A39DA9]">Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
      </div>
    </main>
  );
}

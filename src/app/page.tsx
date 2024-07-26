import Image from "next/image";

// #303338 
// #2A2D31 
// #1E1F22

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 bg-gradient-to-bl from-[#303338] to-[#1E1F22] lg:p-5">
      <div className="bg-[white] py-24                   5tim8hnnbnuj                                                              55c sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#2A2D31]">
              Your Interactive Document Companion
            </h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversationns
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}

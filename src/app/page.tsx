import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-green text-white min-h-[100vh] text-center">
      <h1 className="text-4xl pt-20 pb-4">DeXter Markets</h1>
      <p className="text-gray-400">The NFT marketplace Radix deserves</p>
      <button className="px-10 py-2 bg-dexter-green-OG text-black rounded mt-8">Join Waitlist</button>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  const text = "!dlrow olleH";
  const reversedText = text.split("").reverse().join("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {reversedText}
      </div>
    </main>
  );
}

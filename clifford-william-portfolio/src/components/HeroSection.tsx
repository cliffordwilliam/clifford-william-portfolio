import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex items-center flex-wrap overflow-x-hidden container mx-auto">
      <div className="flex-1 p-8 basis-60">
        <h1 className="text-4xl font-bold mb-4">Clifford William</h1>
        <p className="text-lg mb-4">
          Hello, I'm Clifford William, fullstack web developer based in
          Indonesia, Bandung.
        </p>
        <Link
          href={"/portfolio"}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          My Portfolio
        </Link>
      </div>
      <div className="flex-1 basis-60 relative overflow-hidden h-96 md:h-dvh">
        <Image
          src="/hero.webp"
          alt="Clifford William Photo"
          width={2003}
          height={3000}
          className="absolute top-0 h-full object-contain -z-10"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;

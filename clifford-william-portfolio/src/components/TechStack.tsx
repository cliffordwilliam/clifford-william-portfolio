import Image from "next/image";
import Link from "next/link";

type card = {
  imageSrc: string;
  h3: string;
  p: string;
  href: string;
};

const TechStack = ({ cards }: { cards: card[] }) => {
  return (
    <section className="p-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">My Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ imageSrc, h3, p, href }) => (
            <Link
              href={href}
              className="bg-white p-6 rounded-md shadow-md text-center transition duration-300 ease-in-out transform hover:scale-105"
              key={imageSrc}
            >
              <Image
                src={imageSrc}
                alt={h3}
                width={80}
                height={80}
                className="mx-auto mb-4 size-24"
                priority
              />
              <h3 className="text-xl font-semibold mb-2">{h3}</h3>
              <p className="text-gray-600">{p}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

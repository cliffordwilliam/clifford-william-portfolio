import Image from "next/image";
import Link from "next/link";

type portfolio = {
  imageSrc: string;
  h3: string;
  p: string;
  href: string;
};

const Portfolio = ({ portfolios }: { portfolios: portfolio[] }) => {
  return (
    <section className="p-12 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Best Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolios.map(({ imageSrc, h3, p, href }) => (
            <div
              className="bg-white rounded-md shadow-md overflow-hidden flex flex-col"
              key={imageSrc}
            >
              <Image
                src={imageSrc}
                alt={h3}
                width={1000}
                height={1000}
                className="w-full h-auto max-h-80 border-b-2"
                priority
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{h3}</h3>
                <p className="text-gray-600 mb-4">{p}</p>
                <Link
                  href={href}
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-auto w-fit"
                >
                  Visit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import Link from "next/link";

const About = () => {
  return (
    <section className="p-12 shadow-inner bg-slate-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Hey there, I'm Clifford William
        </h1>
        <p className="text-lg mb-4">
          I'm a backend/fullstack web developer based in Indonesia, bandung.
        </p>
        <p className="text-lg mb-4">
          I have 1 year of industry experience in web development, and plenty of{" "}
          <Link href={"/portfolio"} className="text-blue-500 hover:underline">
            side projects
          </Link>
          . I currently work as a freelance fullstack web developer, and I am
          open to other opportunities out there.
        </p>
      </div>
    </section>
  );
};

export default About;

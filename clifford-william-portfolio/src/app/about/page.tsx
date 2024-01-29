import About from "@/components/About";
import TechStack from "@/components/TechStack";

const Page = () => {
  const cards = [
    {
      imageSrc: "/react.svg",
      h3: "React",
      p: "A JavaScript library for building UIs.",
      href: "https://react.dev/",
    },
    {
      imageSrc: "/python.svg",
      h3: "Python",
      p: "A versatile programming language known for its simplicity and readability, suitable for various applications.",
      href: "https://www.python.org/",
    },
    {
      imageSrc: "/js.svg",
      h3: "JavaScript",
      p: "A high-level programming language.",
      href: "https://www.javascript.com/",
    },
    {
      imageSrc: "/ts.svg",
      h3: "TypeScript",
      p: "An open-source language which builds on JavaScript by adding static types.",
      href: "https://www.typescriptlang.org/",
    },
    {
      imageSrc: "/next.svg",
      h3: "Next.js",
      p: "A React-based framework for building static and dynamic web applications.",
      href: "https://nextjs.org/",
    },
    {
      imageSrc: "/css.svg",
      h3: "Css",
      p: "A style sheet language used for describing the presentation of a document written in HTML or XML.",
      href: "https://nextjs.org/",
    },
    {
      imageSrc: "/tailwind.svg",
      h3: "Tailwind",
      p: "Utility-first CSS framework for modern, responsive UIs.",
      href: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      imageSrc: "/figma.svg",
      h3: "Figma",
      p: "A collaborative design tool for creating user interfaces, prototypes, and more.",
      href: "https://www.figma.com/",
    },
    {
      imageSrc: "/node.png",
      h3: "Node",
      p: "A powerful JavaScript runtime for building scalable network applications.",
      href: "https://nodejs.org/en",
    },
    {
      imageSrc: "/jest.svg",
      h3: "Jest",
      p: "Delightful JavaScript testing framework for building robust and scalable applications.",
      href: "https://jestjs.io/",
    },
    {
      imageSrc: "/express.svg",
      h3: "Express",
      p: "Fast, unopinionated, minimalist web framework for Node.js.",
      href: "https://expressjs.com/",
    },
    {
      imageSrc: "/mongodb.svg",
      h3: "MongoDb",
      p: "A leading NoSQL database for building scalable and flexible applications.",
      href: "https://www.mongodb.com/",
    },
    {
      imageSrc: "/apollo.svg",
      h3: "Apollo",
      p: "A comprehensive GraphQL platform for building data-driven applications.",
      href: "https://www.apollographql.com/",
    },
    {
      imageSrc: "/graphql.svg",
      h3: "Graphql",
      p: "A query language for APIs, offering a more efficient and powerful alternative to traditional REST.",
      href: "https://graphql.org/",
    },
    {
      imageSrc: "/postgresql.svg",
      h3: "Postgres",
      p: "A powerful SQL database known for scalability and flexibility in application development.",
      href: "https://www.postgresql.org/",
    },
    {
      imageSrc: "/google-cloud.svg",
      h3: "Google Cloud",
      p: "A suite of cloud computing services provided by Google, offering various infrastructure and storage solutions.",
      href: "https://cloud.google.com/",
    },
    {
      imageSrc: "/vercel.svg",
      h3: "Vercel",
      p: "A cloud platform for serverless deployment and hosting of web applications.",
      href: "https://vercel.com/",
    },
    {
      imageSrc: "/godot-engine.svg",
      h3: "Godot Engine",
      p: "An open-source game development engine offering flexibility and powerful features.",
      href: "https://godotengine.org/",
    },
  ];
  return (
    <main className="min-h-screen bg-gray-100">
      <About />
      <TechStack cards={cards} />
    </main>
  );
};

export default Page;

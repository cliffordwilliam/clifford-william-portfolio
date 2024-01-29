import TechStack from "@/components/TechStack";
const Page = () => {
  const cards = [
    {
      imageSrc: "mail.svg",
      h3: "Email",
      p: "ccliffordwilliam@gmail.com",
      href: "ccliffordwilliam@gmail.com",
    },
    {
      imageSrc: "linkedin.svg",
      h3: "LinkedIn",
      p: "See work experience",
      href: "https://www.linkedin.com/in/clifford-william-05bb4220b/",
    },
    {
      imageSrc: "github.svg",
      h3: "Github",
      p: "See more projects",
      href: "https://github.com/cliffordwilliam",
    },
  ];
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="p-12 shadow-inner bg-slate-50">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact me</h1>
          <p className="text-lg mb-4">
            Feel free to contact me if you have any questions or just want to
            say hi!
          </p>
        </div>
      </section>
      <TechStack cards={cards} />
    </main>
  );
};

export default Page;

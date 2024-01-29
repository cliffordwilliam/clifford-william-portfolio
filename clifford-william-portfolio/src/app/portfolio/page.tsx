import Portfolio from "@/components/Portfolio";

const Page = () => {
  const portfolios = [
    {
      imageSrc: "/production-solution-tumbnail.webp",
      h3: "Production Solutions",
      p: "This is the official site that I made for my previous oil recovery provider company. I worked both as a skid drafter and a fullstack web developer. I used PHP on top of Wordpress, I still maintain this site till this day.",
      href: "https://www.productionsolutions.co.th/",
    },
    {
      imageSrc: "/vnlifewithbry-thumbnail.webp",
      h3: "Wedding Invitation",
      p: "This is a freelance collaborative work that I did for a client, a wedding invitation. This wedding invitation has comment and RSVP features. Plain HTML and CSS frontend, plain JS was used for logic.",
      href: "https://vanlifewithbry.com/",
    },
    {
      imageSrc: "/deli-thumbnail.webp",
      h3: "Wholesale Website",
      p: "A simple static website hosted on Github pages, this was made for my ex's business. I only used HTML and CSS, showcasing my deep understanding in semantic HTML and plain CSS to create complex responsive designs.",
      href: "https://vanlifewithbry.com/",
    },
    {
      imageSrc: "/static-portfolio-thumbnail.webp",
      h3: "Nier Automata Design",
      p: "I made this for fun, I wanted to replicate my favourite game, Nier Automata's UI. I have also included my other works in this static site as well.",
      href: "https://cliffordwilliam.github.io/personal-site-static/",
    },
  ];
  return (
    <main className="min-h-screen bg-slate-50">
      <Portfolio portfolios={portfolios} />
    </main>
  );
};

export default Page;

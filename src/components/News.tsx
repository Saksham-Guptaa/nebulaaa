"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const NewsForum = () => {
  const articles = [
    {
      title: "Article 2",
      description:
        "Next-Gen EV Startup Secures $100M Funding to Supercharge Solar Charging Tech",
      image: "/newsforum/2.jpg",
    },
    {
      title: "Article 3",
      description:
        "Quantum Computing Pioneer Hits Milestone with World's Fastest Algorithm",
      image: "/newsforum/3.jpg",
    },
    {
      title: "Article 4",
      description:
        "India's defence Budget Boost Fuels Record-Breaking R&D in Hypersonic Missiles",
      image: "/newsforum/4.jpg",
    },
    {
      title: "Article 5",
      description:
        "FinTech Giant Expands into Metaverse Banking with Immersive Customer Experience",
      image: "/newsforum/5.jpg",
    },
    {
      title: "Article 6",
      description:
        "Global Semiconductor Supply Chain Gets $1B Boost from Public-Private Partnership",
      image: "/newsforum/6.jpg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // Check if scrollContainer is not null
      let scrollAmount = 0;

      const scroll = () => {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        requestAnimationFrame(scroll);
      };

      scroll();
    }
  }, []);

  return (
    <div className="bg-gray-100 py-12 md:mx-10 lg:mx-16">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-red-600 md:text-6xl lg:text-8xl">
          NEWS FORUM
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex w-full overflow-x-auto py-4 md:w-auto"
        >
          {articles.concat(articles).map((article, index) => (
            <div
              key={index}
              className="mx-2 min-w-[250px] max-w-[300px] md:mx-4 md:min-w-[300px]"
            >
              <Image
                src={article.image}
                alt={article.title}
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-48"
                width={100}
                height={100}
              />
              {/* <h2 className="mt-2 text-lg md:text-xl font-semibold text-black">{article.title}</h2> */}
              <p className="text-sm font-bold text-gray-900 md:text-base">
                {article.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-nowrap">
          <button className="mt-4 p-2 text-[#2aaee2] underline md:ml-4 md:mt-0">
            Show All --&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsForum;

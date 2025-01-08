"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const NewsForum = () => {
    const articles = [
        {
            title: "AI-Powered Drone Swarm Revolutionizes Battlefield Tactics",
            description: "AI-Powered Drone Swarm Revolutionizes Battlefield Tactics",
            image: "/newsforum/1.jpeg",
        },
        {
            title: "Article 2",
            description: "Next-Gen EV Startup Secures $100M Funding to Supercharge Solar Charging Tech",
            image: "/newsforum/2.jpg",
        },
        {
            title: "Article 3",
            description: "Quantum Computing Pioneer Hits Milestone with World's Fastest Algorithm",
            image: "/newsforum/3.jpg",
        },
        {
            title: "Article 4",
            description: "India's Defense Budget Boost Fuels Record-Breaking R&D in Hypersonic Missiles",
            image: "/newsforum/4.jpg",
        },
        {
            title: "Article 5",
            description: "FinTech Giant Expands into Metaverse Banking with Immersive Customer Experience",
            image: "/newsforum/5.jpg",
        },
        {
            title: "Article 6",
            description: "Global Semiconductor Supply Chain Gets $1B Boost from Public-Private Partnership",
            image: "/newsforum/6.jpg",
        },
        
    ];

    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) { // Check if scrollContainer is not null
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
        <div className="bg-gray-100 md:mx-10 lg:mx-16 py-12">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-red-600">NEWS FORUM</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div ref={scrollRef} className="flex overflow-x-auto py-4 scrollbar-hide w-full md:w-auto">
                    {articles.concat(articles).map((article, index) => (
                        <div key={index} className="min-w-[250px] md:min-w-[300px] max-w-[300px] mx-2 md:mx-4">
                            <Image
                                src={article.image}
                                alt={article.title}
                                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
                            />
                            {/* <h2 className="mt-2 text-lg md:text-xl font-semibold text-black">{article.title}</h2> */}
                            <p className="text-gray-900 font-bold text-sm md:text-base">{article.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-nowrap">
                    <button className="text-[#2aaee2] underline mt-4 md:mt-0 md:ml-4 p-2">
                        Show All --&gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsForum;
"use client"
import React, { useEffect, useRef } from 'react';

const ServiceSlider = () => {
    const articles = [
        {
            title: "Article 1",
            image: "/serviceslider1.jpeg",
        },
        {
            title: "Article 2",
             image: "/serviceslider2.jpeg",
        },
        {
            title: "Article 3",
             image: "/serviceslider3.jpeg",
        },
        {
            title: "Article 4",
             image: "/serviceslider4.jpeg",
        },
        {
            title: "Article 5",
             image: "/serviceslider5.jpeg",
        }
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
        <div className=" md:mx-10 lg:mx-16 py-12">
            <div className="flex justify-between items-center mb-6"></div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div ref={scrollRef} className="flex overflow-x-auto py-4 scrollbar-hide w-full md:w-auto">
                    {articles.concat(articles).map((article, index) => (
                        <div key={index} className="min-w-[250px] md:min-w-[300px] max-w-[300px] mx-2 md:mx-4">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
                            />
                            {/* <h2 className="mt-2 text-lg md:text-xl font-semibold text-black">{article.title}</h2> */}
                            {/* <p className="text-gray-600 text-sm md:text-base">{article.description}</p> */}
                        </div>
                    ))}
                </div>
                <div className='text-nowrap'></div>
            </div>
        </div>
    );
};

export default ServiceSlider;

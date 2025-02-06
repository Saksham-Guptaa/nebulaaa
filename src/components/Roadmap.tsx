import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  FaUsers,
  FaLightbulb,
  FaFlask,
  FaBusinessTime,
  FaFileContract,
  FaChartLine,
  FaMoneyBillWave,
  FaRocket,
} from "react-icons/fa";

const roadmap = [
  {
    week: "Week 1",
    title: "Understand Your Target Customers",
    points: [
      "Identify and group your customers into segments.",
      "Identify the early adopters and understand their importance.",
      "Bring your customer to life by creating customer personas.",
    ],
    icon: <FaUsers className="text-4xl text-blue-500" />,
    image: "/images/week1.jpg",
  },
  {
    week: "Week 2",
    title: "Explore and Validate the Customer Problem",
    points: [
      "Identify a problem using Jobs-to-be-Done (JTBD) methodology.",
      "Empathize with the customer to further define the problem.",
      "Ask effective questions to develop a better understanding of customer needs.",
    ],
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    image: "/images/week2.jpg",
  },
  {
    week: "Week 3",
    title: "Design Prototype and Test Solutions",
    points: [
      "Explore existing solutions.",
      "Ideate to think of unique solutions for your idea.",
      "Prototype and test selected concepts with customers.",
    ],
    icon: <FaFlask className="text-4xl text-green-500" />,
    image: "/images/week3.jpg",
  },
  {
    week: "Week 4",
    title: "Define and Test a Sustainable Business Model",
    points: [
      "Learn what a business model is and why it is important.",
      "List the nine blocks of Lean Canvas.",
      "Explore the importance of customer value propositions.",
    ],
    icon: <FaBusinessTime className="text-4xl text-purple-500" />,
    image: "/images/week4.jpg",
  },
  {
    week: "Week 5",
    title: "Start-up Legal Aspects",
    points: [
      "Reasons to form an entity early, tax issues, and types of entities.",
      "Contracts, intellectual property, data protection and confidentiality.",
      "Employment laws, founder's agreement, basic compliances, etc.",
    ],
    icon: <FaFileContract className="text-4xl text-red-500" />,
    image: "/images/week5.jpg",
  },
  {
    week: "Week 6",
    title: "Build a Basic Financial Plan for Your Startup & Pitch Deck",
    points: [
      "Identify and estimate the various types of costs.",
      "Identify and estimate the various types of revenue streams.",
      "Determine the viability of your business.",
      "Creating and Curating the Pitch Deck.",
    ],
    icon: <FaChartLine className="text-4xl text-orange-500" />,
    image: "/images/week6.jpg",
  },
  {
    week: "Week 7",
    title: "Finding the Investment Need & Raising Capital",
    points: [
      "Determine the funds you’ll need to launch.",
      "Understand the concept of bootstrapping.",
      "List out the sources and uses of funds raised.",
    ],
    icon: <FaMoneyBillWave className="text-4xl text-green-500" />,
    image: "/images/week7.jpg",
  },
  {
    week: "Week 8",
    title: "Build a Go-to-Market Plan",
    points: [
      "Synthesize all learnings in a compelling storyline.",
      "Build an actionable go-to-market plan.",
      "Launch your product in the international market.",
    ],
    icon: <FaRocket className="text-4xl text-blue-500" />,
    image: "/images/week8.jpg",
  },
];

export default function ProgramRoadmap() {
  return (
    <section className="bg-gray-100 px-6 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Program Roadmap
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Follow our structured roadmap and transform your idea into a
          successful venture in just 8 weeks.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-300 dark:bg-gray-700"></div>

        <div className="mx-auto max-w-5xl">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className={`mb-10 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="flex w-1/2 justify-center">
                <Card className="w-72 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                  <CardHeader className="flex items-center space-x-4">
                    {item.icon}
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.week}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <ul className="mt-2 space-y-1">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-gray-700 dark:text-gray-300"
                        >
                          ✔ {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="flex w-1/2 justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-56 w-80 rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

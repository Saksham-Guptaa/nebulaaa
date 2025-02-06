import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const roadmap = [
  {
    week: "Week 1",
    title: "Understand Your Target Customers",
    points: [
      "Identify and group your customers into segments",
      "Identify the early adopters and understand their importance",
      "Bring your customer to life by creating customer personas",
    ],
  },
  {
    week: "Week 2",
    title: "Explore and Validate the Customer Problem",
    points: [
      "Identify a problem using Jobs-to-be-Done (JTBD) methodology",
      "Empathize with the customer to further define the problem",
      "Ask effective questions to develop a better understanding of customer needs",
    ],
  },
  {
    week: "Week 3",
    title: "Design Prototype and Test Solutions",
    points: [
      "Explore existing solutions",
      "Ideate to think of unique solutions for your idea",
      "Prototype and test selected concepts with customers",
    ],
  },
  {
    week: "Week 4",
    title: "Define and Test a Sustainable Business Model",
    points: [
      "Learn what a business model is and why it is important",
      "List the nine blocks of Lean Canvas",
      "Explore the importance of customer value propositions",
    ],
  },
  {
    week: "Week 5",
    title: "Startup Legal Aspects",
    points: [
      "Reasons to form an entity early, tax issues, and types of entities",
      "Contracts, intellectual property, data protection, and confidentiality",
      "Employment laws, founder's agreement, basic compliances, etc.",
    ],
  },
  {
    week: "Week 6",
    title: "Build a Basic Financial Plan & Pitch Deck",
    points: [
      "Identify and estimate the various types of costs",
      "Identify and estimate the various types of revenue streams",
      "Determine the viability of your business",
      "Creating and curating the Pitch Deck",
    ],
  },
  {
    week: "Week 7",
    title: "Finding Investment & Raising Capital",
    points: [
      "Determine the funds you’ll need to launch",
      "Understand the concept of bootstrapping",
      "List out the sources and uses of funds raised",
    ],
  },
  {
    week: "Week 8",
    title: "Build a Go-to-Market Plan",
    points: [
      "Synthesize all learnings in a compelling storyline",
      "Build an actionable go-to-market plan",
      "Launch your product in the international market",
    ],
  },
];

const ProgramRoadmap = () => {
  return (
    <section className="relative bg-white px-6 py-16 md:px-12 lg:px-24">
      {/* Background Scattered Images */}
      <div className="absolute left-5 top-10 opacity-20">
        <Image src="/images/decor1.png" width={100} height={100} alt="Decor" />
      </div>
      <div className="absolute bottom-10 right-5 opacity-20">
        <Image src="/images/decor2.png" width={120} height={120} alt="Decor" />
      </div>

      {/* Section Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Program Roadmap
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
        The 8-week Nebula Accelerator program follows a structured roadmap to
        help startups refine ideas, validate concepts, and scale successfully.
      </p>

      {/* Roadmap Timeline */}
      <div className="flex flex-col space-y-8">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center"
          >
            {/* Week Number */}
            <div className="mb-4 text-center md:mb-0 md:w-1/4 md:text-left">
              <span className="text-xl font-bold text-blue-600 md:text-2xl">
                {item.week}
              </span>
            </div>

            {/* Content */}
            <Card className="shadow-md transition-transform duration-300 hover:scale-105 md:w-3/4">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <Separator className="my-2" />
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramRoadmap;

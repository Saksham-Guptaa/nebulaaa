import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const InvestorsInResidenceData = [
  {
    title: "Funding Made Accessible",
    description:
      "The Investors-in-Residence program connects startups with a curated network of seasoned investors, venture capitalists, and funding experts.",
  },
  {
    title: "Tailored Investment Strategies",
    description:
      "Our program aligns startups with investors who understand their unique market needs, providing personalized introductions and strategic guidance.",
  },
  {
    title: "Market-Ready Validation",
    description:
      "Startups gain access to resources and feedback loops to perfect their financial models, pitches, and growth plans.",
  },
  {
    title: "Global Investor Network",
    description:
      "Access domestic and international investors for cross-border funding opportunities.",
  },
  {
    title: "Accelerated Growth Path",
    description:
      "The program ensures startups are positioned for long-term growth with strategic financial planning and building investor confidence.",
  },
];

const InvestorsInResidence = () => {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-12 lg:px-24">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Investors-in-Residence Program
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        Our Investors-in-Residence program empowers startups with the right
        funding and investor relationships to fuel growth, sustainability, and
        global expansion.
      </p>
      <div className="space-y-12">
        {InvestorsInResidenceData.map((program, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {program.title}
            </h3>
            <Separator className="my-4" />
            <Card className="shadow-lg transition-transform duration-300 hover:scale-105">
              <CardContent className="p-6">
                <p className="text-gray-700">{program.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestorsInResidence;

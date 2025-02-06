import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const InfluencersInResidenceData = [
  {
    title: "Empowering Brand Storytelling",
    description:
      "Leverages the expertise of leading digital creators and industry influencers to enhance startups' market presence.",
  },
  {
    title: "Authentic Collaborations",
    description:
      "Connects startups with influencers aligned to their brand vision, ensuring impactful partnerships.",
  },
  {
    title: "Market Expansion",
    description:
      "Provides access to influencers, enabling startups to tap into new markets, gain traction, and strengthen their digital presence.",
  },
  {
    title: "Growth-Oriented Strategies",
    description:
      "Offers storytelling workshops and content strategy mentorship to help startups build a consistent and compelling online presence.",
  },
  {
    title: "Transforming Marketing Challenges",
    description:
      "Converts marketing obstacles into opportunities for sustained growth through meaningful influencer collaborations.",
  },
];

const InfluencersInResidence = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Influencers-in-Residence Program
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        Our Influencers-in-Residence program connects startups with the creators
        and influencers that will help them build brand presence, grow, and
        expand into new markets.
      </p>
      <div className="space-y-12">
        {InfluencersInResidenceData.map((program, index) => (
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

export default InfluencersInResidence;

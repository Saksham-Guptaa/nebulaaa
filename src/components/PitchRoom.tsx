import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const programs = [
  {
    title: "Entrepreneur-in-Residence Program",
    points: [
      "Accelerating Startups: Tailored Acceleration Program for concept to thriving enterprise",
      "MVP Development: Transform MVPs into market-ready products through hackathons and expert-led sessions",
      "Market Access: Showcase products globally through The Brand Global Magazine TV",
      "Funding & Growth Support: Access government grants and strategic bootstrapping",
      "Strategic Mentorship: Expert guidance for product valuation, market success, and VC connections",
    ],
  },
  {
    title: "Mentors-in-Residence Program",
    points: [
      "Expert Guidance: Industry-leading mentors help refine early-stage ideas into viable strategies",
      "Hackathons for MVP Development: Opportunities to transform ideas into MVPs with expert mentorship",
      "Connecting with Local Incubators: Bridging gaps with incubation centers for essential resources",
    ],
  },
  {
    title: "Investors-in-Residence Program",
    points: [
      "Funding Made Accessible: Connect with a curated network of investors and VCs",
      "Tailored Investment Strategies: Personalized guidance to match market needs",
      "Market-Ready Validation: Resources and feedback loops to perfect financial models and growth plans",
      "Global Investor Network: Access domestic and international investors for cross-border opportunities",
      "Accelerated Growth Path: Strategic support to build investor confidence and long-term partnerships",
    ],
  },
  {
    title: "Influencers-in-Residence (Creators' Economy)",
    points: [
      "Empowering Brand Storytelling: Leverage influencers to enhance market presence",
      "Authentic Collaborations: Connect with influencers aligned to your brand vision",
      "Market Expansion: Tap into new markets through a diverse pool of influencers",
      "Growth-Oriented Strategies: Storytelling workshops and content strategy mentorship",
      "Transforming Marketing Challenges: Turn marketing obstacles into growth opportunities",
    ],
  },
  {
    title: "Community Social Responsibility (CSR)",
    points: [
      "Driving Positive Impact: Empower startups that prioritize social innovation",
      "Supporting Inclusive Growth: Mentorship for entrepreneurs addressing sustainability and social challenges",
      "Building Responsible Businesses: Incorporating sustainable practices in operations",
      "Collaboration for Social Innovation: Partnerships with NGOs and government agencies for social impact",
      "Catalyzing Change: Fostering a culture of accountability and innovation for social value",
    ],
  },
];

const PitchRoom = () => {
  return (
    <section className="relative bg-gray-50 px-6 py-16 md:px-12 lg:px-24">
      {/* Background Scattered Images */}
      <div className="absolute left-5 top-10 opacity-20">
        <Image src="/images/decor1.png" width={100} height={100} alt="Decor" />
      </div>
      <div className="absolute bottom-10 right-5 opacity-20">
        <Image src="/images/decor2.png" width={120} height={120} alt="Decor" />
      </div>

      {/* Section Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Why Choose the PITCH ROOM at NEBULA?
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
        At NEBULA, we foster innovation, collaboration, and growth. The PITCH
        ROOM is a thriving ecosystem where ideas evolve, partnerships flourish,
        and the future is shaped. Join us and take the next step in your
        entrepreneurial journey.
      </p>

      {/* Program Breakdown */}
      <div className="space-y-12">
        {programs.map((program, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {program.title}
            </h3>
            <Separator className="my-4" />
            <Card className="shadow-lg transition-transform duration-300 hover:scale-105">
              <CardContent className="p-6">
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {program.points.map((point, i) => (
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

export default PitchRoom;

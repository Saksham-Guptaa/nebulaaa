import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PitchRoomData = [
  {
    title: "Entrepreneur-in-Residence Program",
    description: [
      "Accelerating Startups: Nebula Accelerator provides startups with a tailored Acceleration Program, driving their journey from concept to a thriving enterprise.",
      "MVP Development: Startups with a Minimum Viable Product (MVP) can refine their solutions through our hackathons, workshops, and expert-led sessions. Utilizing advanced labs, we guide them in transforming MVPs into market-ready products.",
      "Market Access: Entrepreneurs gain opportunities to showcase their products through The Brand Global Magazine TV, and an extensive partner network, enabling broader market validation and collaborations with SMEs and enterprises.",
      "Funding & Growth Support: By facilitating access to government grants and promoting strategic bootstrapping, we help startups scale efficiently. Ventures aiming for valuations beyond ₹10 Cr. are supported through funding channels and expert recommendations.",
      "Strategic Mentorship: Our experienced mentors assist with product valuation, connect startups with venture capitalists, and resolve critical challenges to ensure readiness for market success.",
    ],
  },
  {
    title: "Mentors-in-Residence Program",
    description: [
      "Expert Guidance: Our industry-leading mentors help refine early-stage ideas into viable business strategies.",
      "Hackathons for MVP Development: At the national and international levels, our Digital India Hackathon creates opportunities to transform innovative ideas into MVPs. Entrepreneurs work with a panel of technology and industry experts and choose from an elite pool of guides to shape their vision.",
      "Connecting with Local Incubators: Entrepreneurs from any city can rely on us to bridge them with nearby incubation centers, providing vital resources and mentorship for a strong foundation.",
    ],
  },
  {
    title: "Investors-in-Residence Program",
    description: [
      "Funding Made Accessible: The Investors-in-Residence program connects startups with a curated network of seasoned investors, venture capitalists, and funding experts.",
      "Tailored Investment Strategies: Our program aligns startups with investors who understand their unique market needs, providing personalized introductions and strategic guidance.",
      "Market-Ready Validation: Startups gain access to resources and feedback loops to perfect their financial models, pitches, and growth plans.",
      "Global Investor Network: Access domestic and international investors for cross-border funding opportunities.",
      "Accelerated Growth Path: The program ensures startups are positioned for long-term growth with strategic financial planning and building investor confidence.",
    ],
  },
  {
    title: "Influencers-in-Residence (Creators' Economy)",
    description: [
      "Empowering Brand Storytelling: Leverages the expertise of leading digital creators and industry influencers to enhance startups' market presence.",
      "Authentic Collaborations: Connects startups with influencers aligned to their brand vision, ensuring impactful partnerships.",
      "Market Expansion: Provides access to influencers, enabling startups to tap into new markets, gain traction, and strengthen their digital presence.",
      "Growth-Oriented Strategies: Offers storytelling workshops and content strategy mentorship to help startups build a consistent and compelling online presence.",
      "Transforming Marketing Challenges: Converts marketing obstacles into opportunities for sustained growth through meaningful influencer collaborations.",
    ],
  },
  {
    title: "Community Social Responsibility (CSR)",
    description: [
      "Driving Positive Impact: We are committed to empowering startups that prioritize social innovation and contribute to community well-being.",
      "Supporting Inclusive Growth: Through targeted initiatives, we provide resources and mentorship to entrepreneurs working on social challenges like sustainability, education, and healthcare.",
      "Building Responsible Businesses: Startups in our CSR program incorporate sustainable practices into their operations, balancing profitability and social responsibility.",
      "Collaboration for Social Innovation: We partner with NGOs, government agencies, and community organizations to amplify social impact and help startups scale their solutions.",
      "Catalyzing Change: Fostering a culture of accountability and innovation, enabling startups to drive meaningful change while creating value for their communities.",
    ],
  },
];

const WhyChoosePitchRoom = () => {
  return (
    <section className="relative bg-gray-50 px-6 py-16 md:px-12 lg:px-24">
      {/* Background Images */}
      <div className="absolute left-5 top-10 opacity-10">
        <Image src="/images/decor1.png" width={120} height={120} alt="Decor" />
      </div>
      <div className="absolute bottom-10 right-5 opacity-10">
        <Image src="/images/decor2.png" width={140} height={140} alt="Decor" />
      </div>

      {/* Section Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Why Choose the PITCH ROOM at NEBULA?
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
        At NEBULA, we believe in fostering innovation, collaboration, and
        growth. The PITCH ROOM is more than just a platform—it’s a thriving
        ecosystem where ideas evolve, partnerships flourish, and the future is
        shaped. Join us and take the next step in your transformative journey
        toward success.
      </p>

      {/* Programs List */}
      <div className="space-y-12">
        {PitchRoomData.map((program, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {program.title}
            </h3>
            <Separator className="my-4" />
            <Card className="shadow-lg transition-transform duration-300 hover:scale-105">
              <CardContent className="p-6">
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {program.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
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

export default WhyChoosePitchRoom;

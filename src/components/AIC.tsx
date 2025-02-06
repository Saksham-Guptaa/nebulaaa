import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AICsProgramData = [
  {
    title: "Tailored Acceleration Programs",
    description:
      "Our AICs are designed to provide startups with intensive support, helping them scale quickly by refining their business models, strategies, and growth plans.",
  },
  {
    title: "Collaborative Ecosystem",
    description:
      "The incubation program fosters a collaborative environment where entrepreneurs can connect, share resources, and get advice from seasoned professionals.",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our AICs come equipped with cutting-edge tools and resources, including 3D printing, meeting spaces, and high-speed internet, to help startups thrive.",
  },
];

const AICsProgram = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Incubation Program for AICs
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        Our Incubation Program for AICs offers a comprehensive ecosystem for
        entrepreneurs, providing the resources and mentorship needed to turn
        ideas into successful ventures.
      </p>
      <div className="space-y-12">
        {AICsProgramData.map((program, index) => (
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

export default AICsProgram;

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CSRData = [
  {
    title: "Driving Positive Impact",
    description:
      "We are committed to empowering startups that prioritize social innovation and contribute to community well-being.",
  },
  {
    title: "Supporting Inclusive Growth",
    description:
      "We provide resources and mentorship to entrepreneurs working on social challenges like sustainability, education, and healthcare.",
  },
  {
    title: "Building Responsible Businesses",
    description:
      "Startups in our CSR program incorporate sustainable practices into their operations, balancing profitability and social responsibility.",
  },
  {
    title: "Collaboration for Social Innovation",
    description:
      "We partner with NGOs, government agencies, and community organizations to amplify social impact and help startups scale their solutions.",
  },
  {
    title: "Catalyzing Change",
    description:
      "We foster a culture of accountability and innovation, enabling startups to drive meaningful change while creating value for their communities.",
  },
];

const CSR = () => {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-12 lg:px-24">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Community Social Responsibility (CSR)
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        At Nebula Accelerator, CSR is at the heart of our mission. We support
        startups that drive social change and address urgent global challenges,
        ensuring that their impact is lasting and sustainable.
      </p>
      <div className="space-y-12">
        {CSRData.map((program, index) => (
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

export default CSR;

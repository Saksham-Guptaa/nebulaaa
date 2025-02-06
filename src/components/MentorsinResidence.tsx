import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const MentorsInResidenceData = [
  {
    title: "Expert Guidance",
    description:
      "Our industry-leading mentors help refine early-stage ideas into viable business strategies. Through virtual or on-site mentorship with our affiliated local incubators, we provide tailored advice to match each entrepreneur's unique needs.",
  },
  {
    title: "Hackathons for MVP Development",
    description:
      "At the national and international levels, our Digital India Hackathon creates opportunities to transform innovative ideas into MVPs. Entrepreneurs work with a panel of technology and industry experts and choose from an elite pool of guides to shape their vision.",
  },
  {
    title: "Connecting with Local Incubators",
    description:
      "Entrepreneurs from any city can rely on us to bridge them with nearby incubation centers, providing vital resources and mentorship for a strong foundation.",
  },
];

const MentorsInResidence = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Mentors-in-Residence Program
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        Our Mentors-in-Residence program connects entrepreneurs with experienced
        mentors to refine ideas and strategies, supporting them in their journey
        to success.
      </p>
      <div className="space-y-12">
        {MentorsInResidenceData.map((program, index) => (
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

export default MentorsInResidence;

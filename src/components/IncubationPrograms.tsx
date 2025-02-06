import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const programBenefits = [
  "1-2-1 Business Mentoring sessions with esteemed Industry experts",
  "Customized Technical Support by Nebula Incubation Team for building start-ups",
  "Connecting with Investors and providing opportunities to pitch for funding at an early stage",
  "Bridging the gap of Industry connections by interacting with Founders and Professionals",
  "Facilitating Credit Linkages",
  "Assisting in complete Company Formation and Start-up Registration",
  "Enabling Statutory Compliances",
  "Legal, Secretarial, Accounting, Finance & IP Support",
  "Opportunity in Demo Day to be a part of Nebula Accelerator at minimal or no cost",
  "Invitation to exclusive in-person and virtual events with Tech Innovators, VCs, and Angel Investors",
];

const eligibility = [
  "Early-stage founders/incubators & leaders looking to validate their startup skills",
  "Entrepreneurs seeking support, services, coaching, and mentoring from Nebula Accelerator",
  "Startups aiming to secure funding and industry connections for accelerated growth",
];

const IncubationProgram = () => {
  return (
    <section className="relative bg-gray-100 px-6 py-16 md:px-12 lg:px-24">
      {/* Background Scattered Images */}
      <div className="absolute left-5 top-10 opacity-20">
        <Image src="/images/decor1.png" width={100} height={100} alt="Decor" />
      </div>
      <div className="absolute bottom-10 right-5 opacity-20">
        <Image src="/images/decor2.png" width={120} height={120} alt="Decor" />
      </div>

      {/* Section Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Incubation Program for AICs
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
        Nebula Accelerator supports early-stage tech incubators by providing
        direct access to an international network of top mentors, partners, and
        investors. Over a structured 3-week program, participants engage in
        expert-led workshops, mentorship, and funding opportunities to scale
        their incubators successfully.
      </p>

      {/* Program Benefits */}
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {programBenefits.map((benefit, index) => (
          <Card
            key={index}
            className="shadow-md transition-transform duration-300 hover:scale-105"
          >
            <CardContent className="flex items-start space-x-3 p-4">
              <CheckCircle className="text-blue-600" size={24} />
              <p className="text-gray-700">{benefit}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Who Can Apply */}
      <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Who Can Apply?
      </h3>
      <ul className="mx-auto mb-12 max-w-2xl list-inside list-disc space-y-2 text-gray-700">
        {eligibility.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default IncubationProgram;

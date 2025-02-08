import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import image1 from '../../public/pictures/WA1.jpeg'
import image2 from '../../public/pictures/WA2.jpeg'

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
    <section className="relative bg-gradient-to-b from-blue-50 to-white px-6 py-16 md:px-12 lg:px-24">
      {/* Background Images
      <div className="absolute left-24 top-10">
        <Image src={image1} width={300} height={300} alt="Decor" />
      </div>
      <div className="absolute bottom-10 right-5">
        <Image src={image2} width={140} height={140} alt="Decor" />
      </div> */}

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
          Incubation Program for AICs
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 md:text-xl">
          Nebula Accelerator supports early-stage tech incubators by providing
          direct access to an international network of top mentors, partners, and
          investors. Over a structured 3-week program, participants engage in
          expert-led workshops, mentorship, and funding opportunities.
        </p>
      </div>

      {/* Program Benefits */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programBenefits.map((benefit, index) => (
          <Card
            key={index}
            className="rounded-lg border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardContent className="flex items-start space-x-3 p-5">
              <CheckCircle className="text-blue-600" size={28} />
              <p className="text-gray-700">{benefit}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Who Can Apply */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-800">Who Can Apply?</h3>
        <ul className="mx-auto mt-6 max-w-2xl space-y-3 text-lg text-gray-700">
          {eligibility.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckCircle className="text-green-600" size={22} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IncubationProgram;

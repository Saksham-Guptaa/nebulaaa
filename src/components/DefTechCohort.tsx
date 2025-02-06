import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  "Focused and structured live workshops on how to test, validate and improve on the business idea",
  "Get access to Tech Support for Building your Idea from the ground up",
  "Group Mentoring Sessions with continuous inputs at crucial stages of your start-up journey",
  "Training from International Mentors & Award-winning Industry Experts",
  "Be a part of a vast Global Blockchain Network",
  "Personalized support from Nebula Team for fulfilling your dream of building your own venture",
  "Learn and share in a community of like-minded founders in a collaborative environment",
  "Opportunity in Demo Day to be a part of Nebula Accelerator at NO EXTRA COST",
  "Get Certificate of Participation and awards for winners with lots of entrepreneurial resources and goodies",
  "Get a chance to attend exclusive in-person and virtual premium events with Tech Innovators, Venture Capitalists, Angel Investors, and more",
];

const eligibility = [
  "Founders/Co-Founders of Idea/Pre-Idea/Early/Growth Stage Start-ups",
  "Students and Working Professionals with Start-up Aspirations and Ideas",
  "Anyone with an Idea to Scale and willingness to become an Entrepreneur",
];

const workshops = [
  "Introduction to Innovation",
  "The Basics of Entrepreneurship",
  "Market Fit (PMF) and Customer Feedback",
  "IP and Competition",
  "Marketing and Road mapping",
  "Primary research exercises for validation",
  "Pitching for funding & finances",
  "Demo Day with an opportunity to join Nebula Accelerator (Equity-Free Model)",
];

const DefTechCohort = () => {
  return (
    <section className="relative bg-white px-6 py-16 md:px-12 lg:px-24">
      {/* Background Scattered Images */}
      <div className="absolute left-10 top-5 opacity-20">
        <Image src="/images/decor3.png" width={100} height={100} alt="Decor" />
      </div>
      <div className="absolute bottom-10 right-5 opacity-20">
        <Image src="/images/decor4.png" width={120} height={120} alt="Decor" />
      </div>

      {/* Section Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        DefTech CoHort
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
        Nebula Accelerator encourages ambitious innovators and entrepreneurs by
        providing the right platform to turn ideas into successful start-ups.
        Our CoHort program blends design thinking, mentorship, and structured
        training to help fast-track your entrepreneurial journey.
      </p>

      {/* Features List */}
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="shadow-md transition-transform duration-300 hover:scale-105"
          >
            <CardContent className="flex items-start space-x-3 p-4">
              <CheckCircle className="text-green-600" size={24} />
              <p className="text-gray-700">{feature}</p>
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

      {/* Sessions & Workshops */}
      <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Sessions & Workshops
      </h3>
      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {workshops.map((workshop, index) => (
          <Card
            key={index}
            className="shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <CardContent className="p-4">
              <h4 className="text-lg font-medium text-gray-700">{workshop}</h4>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Dates */}
      <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Important Dates
      </h3>
      <div className="mx-auto max-w-2xl text-center text-gray-600">
        <p>
          <strong>Application Opens:</strong> [To be updated]
        </p>
        <p>
          <strong>Application Closes:</strong> [To be updated]
        </p>
        <p>
          <strong>Program Starts:</strong> [To be updated]
        </p>
        <p>
          <strong>Program Ends:</strong> [To be updated]
        </p>
        <p>
          <strong>Graduation:</strong> [To be updated]
        </p>
      </div>
    </section>
  );
};

export default DefTechCohort;

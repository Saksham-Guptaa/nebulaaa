import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";

const cohortDetails = {
  title: "DefTech CoHort",
  description:
    "Nebula Accelerator aims to encourage ambitious innovators and entrepreneurs by facilitating them to revolutionize their ideas and establish an impactful start-up in the rapidly expanding start-up ecosystem.",
  highlights: [
    "Focused and structured live workshops on testing, validating, and improving business ideas",
    "Access to Tech Support for building your idea from scratch",
    "Group Mentoring Sessions at crucial startup stages",
    "Training from International Mentors & Award-winning Industry Experts",
    "Be a part of a vast Global Blockchain Network",
    "Personalized support from Nebula Team",
    "Community of like-minded founders in a collaborative environment",
    "Demo Day opportunity at NO EXTRA COST",
    "Certificate of Participation & entrepreneurial goodies",
    "Exclusive access to premium tech & investor events",
  ],
  whoCanApply: [
    "Founders/Co-Founders of Idea/Pre-Idea/Early/Growth Stage Start-ups",
    "Students and Working Professionals with Start-up Aspirations",
    "Anyone with an Idea and a willingness to become an Entrepreneur",
  ],
  sessions: [
    "Introduction to Innovation",
    "The Basics of Entrepreneurship",
    "Market Fit (PMF) and Customer Feedback",
    "IP and Competition",
    "Marketing and Roadmapping",
    "‘Get Out of the Building’ exercises for conducting primary research",
    "Primary market research review & creating a world-class pitch",
    "Demo Day with an opportunity to get a Nebula Accelerator (*Equity FREE Model)",
  ],
  importantDates: [
    { label: "Application Opens", date: "TBD" },
    { label: "Application Closes", date: "TBD" },
    { label: "Program Starts", date: "TBD" },
    { label: "Program Ends", date: "TBD" },
    { label: "Graduation", date: "TBD" },
  ],
};

const incubationDetails = {
  title: "Incubation Program for AICs",
  description:
    "Nebula Accelerator supports early-stage tech incubators by providing direct access to an international network of the most relevant mentors, partners, and investors in their industry.",
  highlights: [
    "1-2-1 Business Mentoring sessions with industry experts",
    "Customized Technical Support for building start-ups",
    "Investor connections and funding opportunities",
    "Industry networking & collaboration",
    "Facilitating Credit Linkages",
    "Complete Company Formation and Start-up Registration",
    "Legal, Secretarial, Accounting, and IP Support",
    "Opportunity in Demo Day with minimal or NO EXTRA COST",
    "Exclusive access to premium in-person and virtual events",
  ],
  whoCanApply: [
    "Early-stage founders/incubators & leaders looking to accelerate their startup skills",
    "Anyone seeking support, coaching, and mentoring to achieve their venture’s mission",
  ],
};

export default function Programs() {
  return (
    <section className="bg-gray-50 px-6 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* DefTech Cohort */}
        <Card className="mb-12 rounded-xl bg-white shadow-lg dark:bg-gray-800">
          <CardHeader className="relative">
            <Image
              src="/images/cohort.jpg"
              alt="Cohort Image"
              width={800}
              height={400}
              className="h-64 w-full rounded-t-xl object-cover"
            />
            <CardTitle className="mt-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
              {cohortDetails.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {cohortDetails.description}
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Program Highlights
            </h3>
            <ul className="mt-4 space-y-2">
              {cohortDetails.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  ✔ {highlight}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Who Can Apply?
            </h3>
            <ul className="mt-4 space-y-2">
              {cohortDetails.whoCanApply.map((person, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  ✔ {person}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Program Sessions & Workshops
            </h3>
            <Accordion type="single" collapsible className="mt-4">
              {cohortDetails.sessions.map((session, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg">
                    {session}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Learn more about {session} with our industry experts.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Important Dates
            </h3>
            <ul className="mt-4 space-y-2">
              {cohortDetails.importantDates.map((date, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  <strong>{date.label}: </strong> {date.date}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Incubation Program */}
        <Card className="rounded-xl bg-white shadow-lg dark:bg-gray-800">
          <CardHeader className="relative">
            <Image
              src="/images/incubation.jpg"
              alt="Incubation Image"
              width={800}
              height={400}
              className="h-64 w-full rounded-t-xl object-cover"
            />
            <CardTitle className="mt-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
              {incubationDetails.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {incubationDetails.description}
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Program Highlights
            </h3>
            <ul className="mt-4 space-y-2">
              {incubationDetails.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  ✔ {highlight}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Who Can Apply?
            </h3>
            <ul className="mt-4 space-y-2">
              {incubationDetails.whoCanApply.map((person, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  ✔ {person}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

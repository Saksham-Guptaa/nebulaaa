import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const areasOfInterest = [
  "FinTech",
  "EdTech",
  "Blockchain, AI, ML, Sensor Technology",
  "Media and Entertainment",
  "Hospitality and Retail",
  "Housing, Construction and Urban Development",
  "Healthcare and Pharmaceuticals",
  "Water, Sanitation, and Solid Waste Management",
  "Cleantech, Fundtech, Renewable Energy, Bio-Technology, and Agriculture",
  "Smart City, Aviation, Defence",
  "Or an untapped innovation in the technology space",
];

export default function AreasOfInterest() {
  return (
    <section className="bg-gray-100 px-6 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Areas of Interest
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Then Nebula Acceleration is your foster home. Read our programs
          designed for your trailblazing idea.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {areasOfInterest.map((area, index) => (
          <Card
            key={index}
            className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800"
          >
            <CardContent className="flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                {area}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

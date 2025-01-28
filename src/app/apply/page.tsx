"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";

export default function ApplyPage() {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string;
    stage: string;
    program: string;
    description: string;
    problem: string;
    market: string;
    team: string;
    funding: string;
    support: string[];
    terms: boolean;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    stage: "",
    program: "",
    description: "",
    problem: "",
    market: "",
    team: "",
    funding: "",
    support: [],
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "terms") {
      setFormData((prev) => ({
        ...prev,
        terms: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        support: checked
          ? [...prev.support, name]
          : prev.support.filter((item) => item !== name),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Application submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          companyName: "",
          stage: "",
          program: "",
          description: "",
          problem: "",
          market: "",
          team: "",
          funding: "",
          support: [],
          terms: false,
        });
      } else {
        setMessage("Failed to submit the application. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Apply Now</h1>
          <p className="max-w-2xl text-xl text-white/90 md:text-2xl">
            Take the first step towards accelerating your DefenceTech startup.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <Card>
            <CardHeader>
              <CardTitle>Program Application</CardTitle>
              <CardDescription>
                Please fill out the form below carefully. All fields marked with
                * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                {/* Startup Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Startup Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">
                      Company Name (if applicable)
                    </Label>
                    <Input id="companyName" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stage">Current Stage *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idea">Idea Stage</SelectItem>
                        <SelectItem value="prototype">Prototype</SelectItem>
                        <SelectItem value="mvp">MVP</SelectItem>
                        <SelectItem value="market">In Market</SelectItem>
                        <SelectItem value="growth">Growth Stage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Preferred Program *</Label>
                    <RadioGroup defaultValue="pre-incubation">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="pre-incubation"
                          id="pre-incubation"
                        />
                        <Label htmlFor="pre-incubation">Pre-Incubation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="incubation" id="incubation" />
                        <Label htmlFor="incubation">Incubation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="acceleration"
                          id="acceleration"
                        />
                        <Label htmlFor="acceleration">Acceleration</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Describe your startup/idea (max 500 words) *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your startup or idea..."
                      required
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="problem">
                      What problem are you solving? (max 300 words) *
                    </Label>
                    <Textarea
                      id="problem"
                      placeholder="Describe the problem you're addressing..."
                      required
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="market">Target Market *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary market" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="military">Military</SelectItem>
                        <SelectItem value="Defence-contractors">
                          Defence Contractors
                        </SelectItem>
                        <SelectItem value="government">
                          Government Agencies
                        </SelectItem>
                        <SelectItem value="commercial">
                          Commercial Security
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">
                    Additional Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="team">Team Size *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Solo Founder</SelectItem>
                        <SelectItem value="2-5">2-5 People</SelectItem>
                        <SelectItem value="6-10">6-10 People</SelectItem>
                        <SelectItem value="11+">11+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="funding">Current Funding Status *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select funding status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bootstrapped">
                          Bootstrapped
                        </SelectItem>
                        <SelectItem value="pre-seed">Pre-seed</SelectItem>
                        <SelectItem value="seed">Seed</SelectItem>
                        <SelectItem value="series-a">Series A</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>What support are you looking for? *</Label>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {supportOptions.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={option.id} />
                          <Label htmlFor={option.id}>{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy. I
                      understand that my personal data will be processed in
                      accordance with Nebula Accelerator's privacy policy.
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const supportOptions = [
  { id: "mentorship", label: "Mentorship" },
  { id: "funding", label: "Funding" },
  { id: "networking", label: "Networking" },
  { id: "technical", label: "Technical Support" },
  { id: "market-access", label: "Market Access" },
  { id: "legal", label: "Legal Support" },
  { id: "office-space", label: "Office Space" },
  { id: "product-development", label: "Product Development" },
];

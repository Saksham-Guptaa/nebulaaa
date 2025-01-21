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
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    title: "Email Us",
    content: "contact@nebulaaccelerator.com",
    icon: Mail,
  },
  {
    title: "Call Us",
    content: "+91 (123) 456-7890",
    icon: Phone,
  },
  {
    title: "Visit Us",
    content: "Mumbai, Maharashtra, India",
    icon: MapPin,
  },
];

const faqs = [
  {
    question: "What stage startups do you accept?",
    answer:
      "We accept startups from idea stage to early growth stage, with a focus on defence technology innovations.",
  },
  {
    question: "How long are your programs?",
    answer:
      "Our programs range from 8-12 weeks for the accelerator to 6-12 months for incubation, depending on the startup's needs.",
  },
  {
    question: "Do you provide funding?",
    answer:
      "Yes, we provide funding opportunities through our network of investors and our own innovation fund for qualified startups.",
  },
  {
    question: "What is your selection process?",
    answer:
      "Our selection process includes application review, interviews, and pitch presentations to our selection committee.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelect = (value: any) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          interest: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Contact Us</h1>
          <p className="max-w-2xl text-xl text-white/90 md:text-2xl">
            Get in touch with our team to learn more about our programs and how
            we can help your startup.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-semibold">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <Select onValueChange={handleSelect}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pre-incubation">
                          Pre-Incubation Program
                        </SelectItem>
                        <SelectItem value="incubation">
                          Incubation Program
                        </SelectItem>
                        <SelectItem value="acceleration">
                          Acceleration Program
                        </SelectItem>
                        <SelectItem value="mentorship">
                          Becoming a Mentor
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunities
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                  {status && <p className="mt-4 text-center">{status}</p>}
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>
                  Our office is located in the heart of the technology district.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-video rounded-lg bg-gray-200">
                  {/* Replace with actual map implementation */}
                  <div className="flex h-full w-full items-center justify-center text-gray-500">
                    Map will be embedded here
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Nebula Accelerator</p>
                  <p className="text-gray-600">
                    123 Innovation Street
                    <br />
                    Tech District
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import React from "react";

const PricingTableOne: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {/* <!-- Pricing Item --> */}
        <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
          <span className="mb-2.5 block text-title-sm2 font-bold text-black dark:text-white">
            Exclusive Membership
          </span>
          <h3>
            <span className="text-xl font-medium text-black dark:text-white">
              $
            </span>
            <span className="text-title-xxl2 font-bold text-black dark:text-white">
              99.00
            </span>
            <span className="font-medium"> Per Month</span>
          </h3>

          <h4 className="mb-5 mt-7.5 text-lg font-medium text-black dark:text-white">
            Features
          </h4>

          <ul className="flex flex-col gap-3.5">
            <li className="font-medium">
              Exclusive Membership offers startups priority access to resources,
              personalized support, and tailored opportunities to accelerate
              growth.
            </li>
          </ul>

          <Link
            href="/paymentInfo"
            className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white"
          >
            Purchase Now
          </Link>
        </div>

        {/* <!-- Pricing Item --> */}
        <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
          <span className="absolute -right-1 top-3.5"></span>
          <span className="mb-2.5 block text-title-sm2 font-bold text-black dark:text-white">
            Founders and Teams
          </span>
          <h3>
            <span className="text-xl font-medium text-black dark:text-white">
              $
            </span>
            <span className="text-title-xxl2 font-bold text-black dark:text-white">
              399.00
            </span>
            <span className="font-medium"> Per Month</span>
          </h3>

          <h4 className="mb-5 mt-7.5 text-lg font-medium text-black dark:text-white">
            Features
          </h4>

          <ul className="flex flex-col gap-3.5">
            <li className="font-medium">
              Founders and Teams membership is designed for startup founders and
              their core team members to receive comprehensive support and
              guidance throughout their entrepreneurial journey
            </li>
          </ul>

          <Link
            href="/paymentInfo"
            className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white"
          >
            Purchase Now
          </Link>
        </div>

        {/* <!-- Pricing Item --> */}
        <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
          <span className="mb-2.5 block text-title-sm2 font-bold text-black dark:text-white">
            Mentors in Residence
          </span>
          <h3>
            <span className="text-xl font-medium text-black dark:text-white">
              $
            </span>
            <span className="text-title-xxl2 font-bold text-black dark:text-white">
              699.00
            </span>
            <span className="font-medium"> Per Month</span>
          </h3>

          <h4 className="mb-5 mt-7.5 text-lg font-medium text-black dark:text-white">
            Features
          </h4>

          <ul className="flex flex-col gap-3.5">
            <li className="font-medium">
              Mentors in Residence membership is tailored for seasoned
              professionals who wish to contribute their expertise and guidance
              to early-stage startups within the accelerator program.
            </li>
          </ul>

          <Link
            href="/paymentInfo"
            className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white"
          >
            Purchase Now
          </Link>
        </div>

        <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
          <span className="mb-2.5 block text-title-sm2 font-bold text-black dark:text-white">
            Investors in Residence
          </span>
          <h3>
            <span className="text-xl font-medium text-black dark:text-white">
              $
            </span>
            <span className="text-title-xxl2 font-bold text-black dark:text-white">
              999.00
            </span>
            <span className="font-medium"> Per Month</span>
          </h3>

          <h4 className="mb-5 mt-7.5 text-lg font-medium text-black dark:text-white">
            Features
          </h4>

          <ul className="flex flex-col gap-3.5">
            <li className="font-medium">
              Investors in Residence membership is designed for angel investors,
              venture capitalists, and other investment professionals seeking
              early access to high-potential startups within the accelerator
              ecosystem.
            </li>
          </ul>

          <Link
            href="/paymentInfo"
            className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white"
          >
            Purchase Now
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingTableOne;

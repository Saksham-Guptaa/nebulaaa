import React from "react";
import Image from "next/image";

const PricingTableOne: React.FC = () => {
  return (
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

        <button className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white">
          Purchase Now
        </button>
      </div>

      {/* <!-- Pricing Item --> */}
      <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
        <span className="absolute -right-1 top-3.5">
          <svg
            width={109}
            height={34}
            viewBox="0 0 109 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0L106 0C107.657 0 109 1.34315 109 3V30L24 30L24 0Z"
              fill="#3C50E0"
            />
            <foreignObject x={24} y={0} width={81} height={30}>
              <div>
                <div className="mt-1 text-center font-satoshi text-sm font-medium text-white">
                  Best Value
                </div>
              </div>
            </foreignObject>
            <path d="M0 0H24V30H0L19 15L0 0Z" fill="#3C50E0" />
            <path d="M105 34L109 30H105V34Z" fill="#2539C8" />
          </svg>
        </span>
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

        <button className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white">
          Purchase Now
        </button>
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
            professionals who wish to contribute their expertise and guidance to
            early-stage startups within the accelerator program.
          </li>
        </ul>

        <button className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white">
          Purchase Now
        </button>
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

        <button className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default PricingTableOne;

"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-[5.25rem]">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Reliable</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Your Trusted Partner in Auto Care
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              At Danny's Complete Autocare, we pride ourselves on our commitment
              to excellence. With over 15 years in the industry, we have
              serviced thousands of vehicles, ensuring they run smoothly and
              safely. Our customer satisfaction rate speaks for itself, as we
              continually strive to exceed expectations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Learn More</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              95%
            </p>
            <h3 className="text-md leading-[1.4] font-bold md:text-xl">
              Cars Serviced
            </h3>
          </div>
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              15
            </p>
            <h3 className="text-md leading-[1.4] font-bold md:text-xl">
              Years in Business
            </h3>
          </div>
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              98%
            </p>
            <h3 className="text-md leading-[1.4] font-bold md:text-xl">
              Customer Satisfaction Rate
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

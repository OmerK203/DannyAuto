"use client";

import { Button, Card } from "@relume_io/relume-ui";
import React from "react";

export function Blog35() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Explore Our Latest Insights
            </h2>
            <p className="md:text-md">
              Stay updated with our automotive tips and advice.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="mb-2 flex text-sm font-semibold">
                Automotive
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Understanding Your Car's Maintenance Needs
                </h5>
              </a>
              <p>
                Learn how to keep your vehicle running smoothly and efficiently.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Jane Doe</h6>
                  <div className="flex items-center">
                    <p className="text-sm">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="mb-2 flex text-sm font-semibold">
                Tips
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Top 5 Winter Driving Tips
                </h5>
              </a>
              <p>
                Prepare your vehicle for safe winter travel with these essential
                tips.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">John Smith</h6>
                  <div className="flex items-center">
                    <p className="text-sm">15 Feb 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">4 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="mb-2 flex text-sm font-semibold">
                Advice
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  How to Choose the Right Tires
                </h5>
              </a>
              <p>
                Find the perfect tires for your vehicle and driving conditions.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Emily Johnson</h6>
                  <div className="flex items-center">
                    <p className="text-sm">20 Mar 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">6 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}

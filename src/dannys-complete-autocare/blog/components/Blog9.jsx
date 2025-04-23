"use client";

import React from "react";

export function Blog9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Welcome to Our Blog
            </h1>
            <p className="md:text-md">
              Explore tips, insights, and expert advice on auto care.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">
            Featured blog posts
          </h2>
          <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 sm:gap-y-14 md:mb-16 lg:mb-20 lg:grid-cols-2">
            <div className="mb-12">
              <div className="flex w-full flex-col items-start justify-start">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="mb-6 aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <p className="mb-2 text-sm font-semibold">Automotive</p>
                <a className="mb-4" href="#">
                  <h3 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                    Understanding Your Car's Maintenance Needs
                  </h3>
                </a>
                <p>
                  Learn how to keep your vehicle running smoothly and
                  efficiently.
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
                    <h6 className="text-sm font-semibold">John Doe</h6>
                    <div className="flex items-center">
                      <p className="text-sm">11 Jan 2022</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">5 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 lg:gap-y-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square w-full rounded-image object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <p className="mb-2 text-sm font-semibold">Tips</p>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      How to Choose the Right Mechanic
                    </h3>
                  </a>
                  <div className="mt-4 flex items-center">
                    <div className="mr-4 shrink-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder avatar"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold">Jane Smith</h6>
                      <div className="flex items-center">
                        <p className="text-sm">15 Feb 2022</p>
                        <span className="mx-2">•</span>
                        <p className="text-sm">6 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square w-full rounded-image object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <p className="mb-2 text-sm font-semibold">Advice</p>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Top 5 Signs Your Car Needs Repairs
                    </h3>
                  </a>
                  <div className="mt-4 flex items-center">
                    <div className="mr-4 shrink-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder avatar"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold">Mike Johnson</h6>
                      <div className="flex items-center">
                        <p className="text-sm">20 Mar 2022</p>
                        <span className="mx-2">•</span>
                        <p className="text-sm">4 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-square w-full rounded-image object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <p className="mb-2 text-sm font-semibold">Maintenance</p>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Essential Tools for Car Owners
                    </h3>
                  </a>
                  <div className="mt-4 flex items-center">
                    <div className="mr-4 shrink-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder avatar"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold">Sara Lee</h6>
                      <div className="flex items-center">
                        <p className="text-sm">05 Apr 2022</p>
                        <span className="mx-2">•</span>
                        <p className="text-sm">7 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">
            Latest blog posts
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
              >
                Updates
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Preparing Your Car for Winter
                </h5>
              </a>
              <p>
                Get your vehicle ready for the cold months ahead with these
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
                  <h6 className="text-sm font-semibold">Tom Brown</h6>
                  <div className="flex items-center">
                    <p className="text-sm">10 Nov 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
              >
                Safety
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Understanding Your Car's Warning Lights
                </h5>
              </a>
              <p>
                Know what those dashboard lights mean for your vehicle's health.
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
                  <h6 className="text-sm font-semibold">Emily Davis</h6>
                  <div className="flex items-center">
                    <p className="text-sm">22 Dec 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">3 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
              >
                Category
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Blog title heading will go here
                </h5>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
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
                  <h6 className="text-sm font-semibold">Full name</h6>
                  <div className="flex items-center">
                    <p className="text-sm">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
              >
                Category
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Blog title heading will go here
                </h5>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
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
                  <h6 className="text-sm font-semibold">Full name</h6>
                  <div className="flex items-center">
                    <p className="text-sm">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
              >
                Category
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Blog title heading will go here
                </h5>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
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
                  <h6 className="text-sm font-semibold">Full name</h6>
                  <div className="flex items-center">
                    <p className="text-sm">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
              >
                Category
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Blog title heading will go here
                </h5>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
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
                  <h6 className="text-sm font-semibold">Full name</h6>
                  <div className="flex items-center">
                    <p className="text-sm">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

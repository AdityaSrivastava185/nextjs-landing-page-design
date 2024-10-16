"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="p-10">
      <div className="max-w-2xl mx-auto antialiased py-4 relative ">
        {EventsData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className={item.badgeclassName}>{item.badge}</h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const EventsData = [
  {
    title: "IoTRON 3.0",
    description: (
      <>
        <div>
          <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              IoTRON 3.0
            </span>{" "}
          </h4>
          <p className="text-md md:text-lg">
            Organized by Signodes, it is an annual themed hardware project
            exhibition and competition that attracts participants from diverse
            branches it empowers students to develop unique & impactful ideas
            and showcase them to a broad audience. Focused on innovation within
            specific themes, the event encourages students to develop IoT-based
            solutions using key technologies such as sensors, microcontrollers,
            and cloud platforms. Participants will showcase their projects,
            applying real-world IoT concepts to address challenges. Winners will
            receive exciting prizes and the opportunity to pitch their ideas at
            higher levels, promoting creativity, technical expertise, and
            problem-solving skills.
          </p>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h5 className="text-xl dark:text-purple">
                    Selection Creteria
                  </h5>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="flex items-center text-sm md:text-lg text-white text-justify font-mono">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Register for the event.
                    </li>
                    <li className="flex items-center text-md md:text-lg text-white">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Build projects based on the specific theme.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h5 className="text-xl dark:text-purple">Themes</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="flex items-center text-sm md:text-lg text-white text-justify font-mono">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Line Folowing Car
                    </li>
                    <li className="flex items-center text-md md:text-lg text-white">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Weather Montitoring System
                    </li>
                    <li className="flex items-center text-md md:text-lg text-white">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Sustainabale Development Goals
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">
                    Perks and Certifications
                  </h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className=" space-y-1 text-pink-300 ">
                      <li className=" text-md md:text-lg text-white">
                        🥇With a total Prize Pool of{" "}
                        <span className="text-[#85a7ff]">
                          ₹10,000 for top rankers,
                        </span>{" "}
                        and exciting goodies for every participant in the event.
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        🥇{" "}
                        <span className="text-[#85a7ff]">
                          certificate of achievement
                        </span>{" "}
                        will be awarded to the winner.
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        🥇Certificates of participation will be provided to
                        everyone.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">
                    Faculty Cordinators
                  </h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-pink-300 ">
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Mayank Deep Khare
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          HOD,CSE-IoT
                        </p>
                      </li>
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Aditte Mattoo
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          DEPUTY HOD,CSE M.TECH-INTEGRATED
                        </p>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">
                    Student Cordinator
                  </h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-pink-300 ">
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Prashant Kumar Singh
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          President
                        </p>
                      </li>
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Sumesh Sarkar
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          Vice-President
                        </p>
                      </li>
                      <li className="text-md md:text-lg">
                        <div className="text-white font-bold text-lg">
                          Rishi Ranjan
                        </div>
                        <p className="text-sm md:text-base text-gray-300 italic">
                          Vice-President
                        </p>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h5 className="text-xl dark:text-purple">Venue</h5>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                      <li className=" text-md md:text-lg text-white ">
                        Idea Lab, Ground Floor, B Block
                      </li>
                      <li className=" text-md md:text-lg text-white">
                        25th October, 2:00 pm Onwards
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <br />
          </div>
          <br />
          <button
            className="px-6 py-3.5 text-black-100 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg"
            type="button"
          >
            <Link
              href="https://forms.office.com/r/a2z5bahnUC"
              target="_blank"
              className="font-bold"
            >
              Register Now
            </Link>
          </button>
          <br />
          <br />
        </div>
      </>
    ),
    badge: "Ongoing",
    image: "/collaboration.jpg",
    badgeclassName:
      "bg-green-900 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-[#90EE90]",
  },
  {
    title: "XMBLE",
    description: (
      <>
        <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            XMBLE
          </span>{" "}
        </h4>
        <p className="text-md md:text-lg">
          XMBLE is a summer event focused on advancing hardware innovation,
          challenging students to push the boundaries of technology through
          hands-on project development. The event begins with an opening
          ceremony that introduces the themes, followed by team registration
          open to students from all disciplines. Participants engage in
          technical workshops to build skills in hardware design and prototyping
          before entering an intensive project development phase that includes
          regular check-ins and progress reviews. The culmination of the event
          is Demo Day, where teams showcase their prototypes to judges and
          attendees, followed by an award ceremony that recognizes outstanding
          projects and innovative solutions.
        </p>
        <br />
        <br />
      </>
    ),
    badge: "Past Event",
    image: "/xmble.png",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
  {
    title: "IoT NEXUS",
    description: (
      <>
        <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            IoT NEXUS
          </span>{" "}
        </h4>
        <p className="text-md md:text-lg">
          IoT NEXUS The Introduction to IoT workshop, held at NIET College, was
          an 40-hour hands-on session for 2nd-year engineering students. The
          event covered the fundamentals of IoT, including key components like
          sensors, actuators, and microcontrollers. Students learned to program
          Arduino, explored circuit simulation using Tinkercad, and developed
          basic IoT projects. The workshop provided a practical understanding of
          how IoT works, equipping participants with the skills to create their
          own IoT solutions.
        </p>
        <br />
        <br />
      </>
    ),
    badge: "Past Event",
    image: "/nexus.jpeg",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
  {
    title: "IoTRON",
    description: (
      <>
        <h4 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            IoTRON
          </span>{" "}
        </h4>
        <p className="text-md md:text-lg">
          IoTRON is an annual winter event designed to foster creativity and
          innovation among students from diverse disciplines in the field of
          hardware development, centered around the Internet of Things (IoT).
          The event kicks off with a workshop introducing themes, tools, and
          technologies, followed by team formation that encourages
          interdisciplinary collaboration. Participants gain access to
          mentorship from academia and industry as they work on their projects
          over several weeks. The event culminates in a final presentation where
          teams showcase their work to a panel of judges, leading to an awards
          ceremony that recognizes outstanding projects across various
          categories.
        </p>
        <br />
        <br />
      </>
    ),
    badge: "Past Event",
    image: "/iotron.png",
    badgeclassName:
      "bg-yellow-600 text-white rounded-full text-md w-fit px-4 py-1 mb-4 border border-2 border-white",
  },
];

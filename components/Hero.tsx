"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const roles = [
  "Fullstack Developer",
  "Systems Builder",
  "Dashboard Engineer",
  "Automation Developer",
  "API Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 45);
      } else {
        // Done deleting — pause then move to next word
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
          setCharIndex(0);
        }, 300);
      }
    } else {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 80);
      } else {
        // Done typing — pause then start deleting
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Text content */}
          <div className="flex-1 space-y-6">
            <span className="inline-block text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Open to freelance &mdash; let&apos;s talk
            </span>

            {/* Typewriter role line */}
            <p className="text-lg font-mono text-emerald-600 tracking-tight h-7">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-emerald-500 ml-0.5 align-middle animate-pulse" />
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Turn your idea into a working web app&nbsp;&mdash;&nbsp;fast.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              I&apos;m a fullstack developer who builds things end-to-end. Give me a problem
              and I&apos;ll come back with something running &mdash; not a Figma file.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200 text-base shadow-sm"
              >
                Work with me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors duration-200 text-base"
              >
                See my work
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-emerald-100 scale-105" />
              <Image
                src="/resume/profile.jpg"
                alt="Ephraim Teodoro"
                fill
                className="rounded-full object-cover object-top relative z-10 shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

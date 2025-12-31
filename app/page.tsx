"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const images = [
  "/image-1.png",
  "/image-2.png",
  "/image-3.png",
  "/image-4.png",
  "/image-5.png",
  "/image-6.png",
];
const previewVariants = {
  initial: {
    color: "white",
    filter: "blur(8px) brightness(1)",
  },
  animate: {
    filter: "blur(0px) brightness(0.1)",
    transition: {
      duration: 1.2,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-mono uppercase tracking-tight">
      {/* Marquee Container */}
      <div className="w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((src, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              <div className="relative w-56 h-56">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((src, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              <div className="relative w-56 h-56">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start justify-start px-6 py-12 text-left max-w-4xl mx-0">
        <h1 className="text-7xl mb-4 font-medium text-gray-900 dark:text-white font-serif normal-case">
          Nero
        </h1>
        <a
          href="https://github.com/tanvesh01/nero-editor-releases/releases/download/v0.6.1/Nero_0.6.1_universal.dmg"
          className="uppercase flex items-center gap-2 bg-orange-500 mb-4 px-3 py-1 font-mono font-medium relative z-10 cursor-pointer"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download beta now
        </a>

        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            <span className="text-red-500">
              Drop a photo, reveal its essence.{" "}
            </span>{" "}
            Your images contain more emotion than color can convey, and Nero's
            conversion algorithm is built to extract it. Most photo editors bury
            you in sliders and blend modes that require constant adjustment.
            Nero takes a different approach using carefully tuned luminance
            mapping. Just drag your photo onto the canvas and watch the
            conversion happen in real time.
          </p>
        </section>

        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            <span className="text-red-500">Today</span>, photo editing
            applications are overloaded with features buried under nested menus.
            We engineered a different solution. Nero makes optimal conversion
            decisions using pre-calibrated tone curves and contrast algorithms.
            The interface stays minimal because the processing is sophisticated.
            You get exceptional monochrome results immediately, with optional
            fine tuning available when needed.
          </p>
        </section>

        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            <span className="text-red-500">Monochrome</span> conversion is the
            foundation. Nero's shader system includes dithering algorithms,
            paper texture overlays, and fluted glass distortion that give your
            photographs painterly characteristics. These are GPU accelerated
            shaders that manipulate pixel data to add grain structure, surface
            texture, and optical aberration. Your images deserve intentional
            artistic treatment, not automated AI enhancement.
          </p>
        </section>
      </div>

      {/* Full width image */}
      <div className="w-full h-56 relative mb-4">
        <Image
          src="/cover-image-canvas.png"
          alt="Cover image for canvas"
          fill
          className="object-cover"
        />
      </div>

      {/* Continue main content */}
      <div className="flex flex-col items-start justify-start px-6 pt-12 text-left max-w-4xl mx-0">
        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            <span className="text-red-500">Nero's infinite canvas </span>
            uses dynamic memory allocation to give you unlimited workspace.
            Process multiple images simultaneously, compare different shader
            treatments side by side, or focus on a single photograph at any
            resolution. No viewport constraints. No fixed aspect ratios. Just
            you, your photographs, and the tonal information they contain.
          </p>
        </section>

        <footer className="mb-8 text-sm text-gray-500 dark:text-gray-400 relative overflow-visible">
          © 2025 Nero. All rights reserved.
          <motion.h2
            className="absolute left-0 top-0 text-9xl font-normal normal-case font-serif "
            variants={previewVariants}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
          >
            Nero
          </motion.h2>
          <div className="stamp"></div>
        </footer>
      </div>
    </div>
  );
}

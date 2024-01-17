"use client";
import React, { useEffect, useRef } from "react";

import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

import Hero from "./hero";
import Navbar from "./components/navbar/navbar";
import { anim, popIn } from "./components/anim/anim";
import About from "./components/pages/about";
import Featured from "./components/pages/feature";
import About2 from "./components/pages/about2";
import HeroBanner from "./hero-banner";
import Featured2 from "./components/pages/featured2";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
       <motion.div className="fixed left-0 top-0 z-50" {...anim(popIn)}>
        <Navbar />
      </motion.div>

      <div className="w-screen h-full">
        <div className="w-screen h-screen sticky top-0 left-0">
          <Hero />
        </div>
          <div className="w-screen h-full bg-black sticky top-0 left-0">
            <About />
          </div>
      </div>

      <div className="h-[400vh] w-screen">
        <Featured />
      </div>

      <div className="h-full w-screen">
        <About2 />
      </div>

      <div className="h-full w-screen">
        <HeroBanner />
      </div>

      <div className="h-full w-screen">
        <Featured2 />
      </div>
    </div>
  );
}

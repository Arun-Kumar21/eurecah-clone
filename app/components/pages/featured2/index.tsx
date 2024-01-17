"use client";
import React from "react";

import styles from "./styles.module.scss";

import image1 from "@/public/assets/asset 19.png";
import image2 from "@/public/assets/asset 20.jpeg";
import image3 from "@/public/assets/asset 21.jpeg";
import image4 from "@/public/assets/asset 22.gif";
import image5 from "@/public/assets/asset 23.png";
import image6 from "@/public/assets/asset 24.jpeg";
import image7 from "@/public/assets/asset 25.png";

const content = [
  {
    title: "creative direction",
    image: image1,
  },
  {
    title: "visual identity",
    image: image2,
  },
  {
    title: "branding",
    image: image3,
  },
  {
    title: "website",
    image: image4,
  },
  {
    title: "digital design",
    image: image5,
  },
  {
    title: "packing",
    image: image6,
  },
  {
    title: "community",
    image: image7,
  },
];

const Featured2 = () => {
  return (
    <main className={styles.main}>
      <div className="h-full w-screen">
        {content.map((item, index) => (
          <>
            <hr className="w-[90%] mx-auto opacity-40" />
            <div className="w-[90%] h-[40vh] mx-auto">
              <div className=""></div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
};

export default Featured2;

import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <h2 className="title text-center">Welcome to SMNK Blogging Platform</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="We Blog Because… We Can!"
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Explore, Engage, Enjoy!"
          desc="Share Your Toughts"
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Enter the Wonderland of Ideas"
          desc="Get Viewed By Millions Of People Across The Country."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="We Have You At Heart."
        />
      </div>
    </section>
  );
};

export default Features;

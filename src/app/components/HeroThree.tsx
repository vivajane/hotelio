import Image from "next/image";
import React from "react";

const HeroThree = () => {
  return (
    <div className="flex justify-between ">
      <div className="md:grid grid-cols-3 w-full">
        <div className="w-full h-64 md:h-auto ">
          <Image
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
            alt="Hero Image"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg')] w-full  bg-cover bg-center bg-no-repeat relative">
          <div className="">
            <div className="flex flex-col bg-black/50 space-y-4 justify-center text-white items-start gap-4 p-10">
              <p className="text-base md:text-xl font-bold">
                Hotelio is a luxury escape in the heart of Lagos. With world-class
                amenities, personalized services, and stunning interiors, we redefine
                the art of hospitality.
              </p>
              <h1 className="text-base md:text-xl font-bold">Book Your Luxury Experience Today</h1>

            </div>
          </div>
        </div>
        <div className="w-full ">
          <Image
            src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
            alt="Hero Image"
            width={400}
            height={400}
          />
        </div>

      </div>

    </div>
  );
};

export default HeroThree;

import React from "react";
import CardContent from "../fragments/CardContent";
import user1 from "../assets/profile.jpg";
import f1 from "../assets/f1.webp";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";

const Cards = () => {
  return (
    <div className=" w-full space-y-14 py-14 min-h-screen flex items-center flex-col">
      <h1 className="text-balance inter text-xl text-gray-800 text-center sm:text-2xl md:text-3xl lg:text-5xl font-bold">
        Who Work With Us?
      </h1>
      <div className="grid xl:grid-cols-5 gap-7 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-3">
        <CardContent name="Benard Miller" job="Owner" photo={user1} />
        <CardContent name="Julie Jackson" job="CEO" photo={f1} />
        <CardContent name="James Bauer" job="investment Analysis" photo={f2} />
        <CardContent name="Anita George" job="Financial Advisor" photo={f3} />
        <CardContent
          name="Georgina Colson"
          job="Operations Specialist"
          photo={f4}
        />
      </div>
    </div>
  );
};

export default Cards;

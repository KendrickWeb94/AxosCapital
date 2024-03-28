import React from "react";
import People from "../fragments/People";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";
import user7 from "../assets/user7.jpg";
import user9 from "../assets/user9.jpg";

const Testimonials = () => {
  return (
    <div className=" space-y-8 pt-[7rem]">
      <h1 className="text-balance inter text-xl text-gray-800 text-center sm:text-2xl md:text-3xl lg:text-5xl font-bold">
        What Our Clients Say
      </h1>
      <div className="grid-container-2">
        <People
          name="John Smith"
          date="March 10, 2020"
          feedback="Impressive investment options and excellent customer service. Axos Capital Investments helped me grow my portfolio significantly."
          photo={user2}
        />

        <People
          name="Emily Johnson"
          date="June 25, 2021"
          feedback="As a novice investor stepping into the complex world of financial markets, I found Axos Capital Investments to be a beacon of accessibility and enlightenment. Their platform not only boasts a user-friendly interface but also offers a plethora of educational resources that have been instrumental in shaping my investment journey. ."
          photo={user1}
        />

        <People
          name="Michael Brown"
          date="September 15, 2018"
          feedback="Axos Capital Investments offers a wide range of investment opportunities tailored to my financial goals. Their platform is easy to navigate, and I've seen great returns on my investments."
          photo={user3}
        />

        <People
          name="Jessica Miller"
          date=" December 5, 2019"
          feedback="I've been using Axos Capital Investments for several years now, and I'm continually impressed by their professionalism and commitment to client success. Highly recommended!"
          photo={user4}
        />

        <People
          name=" Sarah Wilson"
          date="February 20, 2022"
          feedback="Axos Capital Investments has helped me secure my financial future with their expert guidance and diverse investment options. I'm grateful for their support and expertise."
          photo={user5}
        />

        <People
          name="Hendrick Davis"
          date="July 12, 2015"
          feedback="Axos Capital Investments provides exceptional customer service and transparent investment strategies. I feel confident in their ability to help me achieve my financial goals."
          photo={user6}
        />

        <People
          name="Emma Taylor"
          date="May 8, 2017"
          feedback="I appreciate the personalized approach that Axos Capital Investments takes with their clients. They took the time to understand my needs and provided tailored investment solutions."
          photo={user7}
        />
        <People
          name="Emelia Watson"
          date="December 8, 2016"
          feedback="I appreciate the personalized approach that Axos Capital Investments takes with their clients. They took the time to understand my needs and provided tailored investment solutions."
          photo={user9}
        />
      </div>
    </div>
  );
};

export default Testimonials;

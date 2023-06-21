import React from "react";
import FeedbackCard from "./FeedbackCard";
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "https://images.unsplash.com/photo-1686836342891-6d1b01101f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "https://images.unsplash.com/photo-1686836342891-6d1b01101f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://images.unsplash.com/photo-1686836342891-6d1b01101f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

const Archives = () => {
  return (
    <>
      <section
        id="clients"
        className={`${"sm:py-16 py-6"} bg-zinc-800 ${"flex justify-center items-center"} flex-col relative`}
      >
        <div className="absolute z-0  w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
          <h1
            className={
              "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full"
            }
          >
            What people are <br className="sm:block hidden" /> saying about us
          </h1>
          <div className="w-full md:mt-0 mt-6">
            <p
              className={`${"font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]"} text-left max-w-[450px]`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laborum eum earum sunt iure labore unde error consequuntur quia
              autem!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-1">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Archives;

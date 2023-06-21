import React from "react";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div
      className="flex justify-between flex-col px-10 rounded-[20px] py-12  max-w-[370px] md:mr-10
    sm:mr-5 mr-0 my-5 feedback-card"
    >
      <img
        src="https://images.unsplash.com/photo-1686836342891-6d1b01101f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white  my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt="name" className="w-[48px] h-[48px] rounded-full" />
      </div>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite  ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;

import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { Sidebar, UserProfile } from "../sections";
import { client } from "../lib/client";
import Pins from "./Pins";
import { lectureQuery } from "../utils/data";

const Home2 = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();
  const scrollRef = useRef(null);

  useEffect(() => {
    const query = lectureQuery;
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="hidden md:flex h-screen flex-initial ">
        <Sidebar user={user && user} />
      </div>
      <div className="flex md:hidden">
        <div className="flex items-center w-full p-2 justify-between">
          <HiMenu
            fontSize={20}
            onClick={() => setToggleSidebar(true)}
            className="w-8 h-8"
          />
          <Link to="/">
            <img
              src="data:image/png;base64,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"
              alt="logo"
              className="w-28"
            />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img
              src="https://plus.unsplash.com/premium_photo-1686843679750-73b03c230cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="user-img"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white  animate-slide-in z-10">
            <div className="absolute flex justify-end p-2 w-full">
              <AiFillCloseCircle onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar setToggleSidebar={setToggleSidebar} user={user && user} />
          </div>
        )}
      </div>
      <div className="overflow-y-scroll flex-1 pb-2" ref={scrollRef}>
        <Routes>
          {/* <Route path="/*" element={<Pins user={user && user} />} /> */}
          {/* <Route path="/user-profile/:userId" element={<UserProfile />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Home2;

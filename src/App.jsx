import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { Home, Login } from "./components";
import { Route, Routes, useNavigate } from "react-router-dom";
import { fetchUser } from "../utils/fetch";
import { archiveData, lectureQuery } from "../utils/data";
import Archives from "./components/Archives";
import Session from "./components/Session";
import Lab from "./components/Lab";
const App = () => {
  const [userData, setUserData] = useState("");
  const [userArchives, setUserArchives] = useState([]);
  const [adminId, setAdminId] = useState("");
  const [id, setId] = useState("");
  const [userCourses, setUserCourses] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const query = lectureQuery;
    client.fetch(query).then((data) => {
      setUserData(data);
    });
    const user = fetchUser();
    if (!user) {
      navigate("/login");
    } else {
      const query = `
      *[_type == "admin"] {
        _id,
        threshold,
        courseCode,
        "mapData":map.asset->url,
        "lectureDetails": lectureDetails->{
        ...,
      }
}`;
      client.fetch(query).then((data) => {
        const loggedUserData = data.filter(
          (item) => item.lectureDetails._id === user
        );
        setUserCourses(loggedUserData);

        setThreshold(loggedUserData[0]?.threshold);
      });

      client.fetch(archiveData).then((data) => {
        const loggedUsersArchives = data.filter(
          (item) => item.lectureName?._id === user
        );
        setUserArchives(loggedUsersArchives);
      });
    }
  }, []);
  const [threshold, setThreshold] = useState(0);
 
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <Login
              set
              setAdminId={setAdminId}
              setId={setId}
              setThreshold={setThreshold}
              userData={userData}
            />
          }
        />
        <Route
          path="/*"
          element={
          <Session/>
          }
        />
        <Route path="/lab" element={<Lab userCourses={userCourses}
          adminId={adminId}
          setThreshold={setThreshold}
          threshold={threshold}
          userData={userData}
          id={id}/>}/>
        <Route path="/home" element={<Home  userCourses={userCourses}
          adminId={adminId}
          setThreshold={setThreshold}
          threshold={threshold}
          userData={userData}
          id={id}/>}/>
        <Route
          path="/archive"
          element={<Archives userArchives={userArchives} />}
        />
      </Routes>
    </>
  );
};

export default App;

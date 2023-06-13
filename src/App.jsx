import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { Home, Login } from "./components";
import { Route, Routes, useNavigate } from "react-router-dom";
import { fetchUser } from "../utils/fetch";
import { lectureQuery } from "../utils/data";

const App = () => {
  const [userData, setUserData] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const query = lectureQuery;
    client.fetch(query).then((data) => {
      setUserData(data);
    });
    const user = fetchUser();
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="login"
          element={<Login setId={setId} userData={userData} />}
        />
        <Route path="/*" element={<Home id={id} />} />
      </Routes>
    </>
  );
};

export default App;

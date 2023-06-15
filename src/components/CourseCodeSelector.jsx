import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import React, { useState } from "react";

const CourseCodeSelector = ({ userCourses, setThreshold }) => {
  const [courseCode, setCourseCode] = useState("");
  const handleCourseChanges = () => {
    const selectedCourse = e.target.value;
    setCourseCode(selectedCourse);
    console.log(selectedCourse);
    const getThresholdOfSelectedCourse = userCourses?.filter(
      (item) => item.courseCode === courseCode
    );
    console.log("here", getThresholdOfSelectedCourse);
    setThreshold(getThresholdOfSelectedCourse?.threshold);
  };
  console.log(courseCode);
  return (
    <div className="col-span-3">
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Codes" />
        </SelectTrigger>
        <SelectContent onSelect={handleCourseChanges}>
          {userCourses?.map((item) => (
            <SelectItem
              onSelect={(e) => setCourseCode(e.target.value)}
              value={item.courseCode}
            >
              {item.courseCode}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CourseCodeSelector;

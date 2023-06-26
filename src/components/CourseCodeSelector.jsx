import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import React, { useState } from "react";

const CourseCodeSelector = ({
  userCourses,
  courseCode,
  setCourseCode,
  setThreshold,
}) => {
  return (
    <div className="col-span-3">
      <Select
        defaultValue="1234"
        onValueChange={(courseCode) => {
          setCourseCode(courseCode);
          const getThresholdOfSelectedCourse = userCourses?.filter(
            (item) => item.courseCode === courseCode
          );

          setThreshold(getThresholdOfSelectedCourse[0]?.threshold);
        }}
        value={courseCode}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="Codes" />
        </SelectTrigger>
        <SelectContent className="text-white">
          {userCourses?.map((item) => (
            <SelectItem value={item.courseCode}>{item.courseCode}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CourseCodeSelector;

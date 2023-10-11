import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import React from "react";

const CourseCodeSelector = ({
  userCourses,
  courseCode,
  setCourseCode,
  setThreshold,
}) => {
  console.log("the inside course code is", courseCode);
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
          {userCourses?.map((item, idx) => (
            <SelectItem
              key={`${item - courseCode}-${idx}`}
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

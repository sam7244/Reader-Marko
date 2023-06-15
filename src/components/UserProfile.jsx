import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { client } from "../../lib/client";
import CourseCodeSelector from "./CourseCodeSelector";

export default function UserProfile({
  userCourses,
  open,
  setThreshold,
  setOpen,
  threshold,
}) {
  useEffect(() => {
    setThreshold(
      userCourses?.[0]?.threshold ? userCourses?.[0]?.threshold : 60
    );
  }, []);

  const userName = userCourses[0]?.lectureDetails?.name
    ? userCourses[0]?.lectureDetails?.name
    : "xyz@gmail.com";
  console.log("threshold", threshold);

  const saveThresholdOnChange = async (e) => {
    e.preventDefault();

    client
      .patch(userCourses[0]._id)
      .set({ threshold: Number(threshold) })
      .commit()
      .then(() => {
        setThreshold(threshold);
        window.location.reload();
      });
  };
  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>

        <SheetContent position="right" size="sm">
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Set Threshold value below</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                readOnly
                placeholder={userName}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Threshold
              </Label>
              <Input
                onChange={(e) => setThreshold(e.target.value)}
                id="threshold"
                value={threshold}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right ">CourseCode:</Label>
              <div className="ml-1 col-span-3">
                <CourseCodeSelector
                  setThreshold={setThreshold}
                  userCourses={userCourses}
                />
              </div>
            </div>
          </div>
          <SheetFooter className="">
            <SheetClose asChild>
              <Button onClick={saveThresholdOnChange}> Save Changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

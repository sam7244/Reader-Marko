import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

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
import POCODemo from "../../utils/POCODemo";

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

    setAdminId(userCourses[0]?._id ? userCourses[0]?._id : "sdfa");
  }, []);

  const [adminId, setAdminId] = useState("");

  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile?.name);
    // uploading asset to sanity
    client.assets
      .upload("file", selectedFile, {
        filename: selectedFile?.name,
      })
      .then((fileAsset) => {
        // Here you can decide what to do with the returned asset document.
        // If you want to set a specific asset field you can to the following:
        return client
          .patch(adminId)
          .set({
            map: {
              _type: "file",
              asset: { _type: "reference", _ref: fileAsset._id },
            },
          })
          .commit();
      })
      .then(() => {
        console.log("Done!");
      });
  };

  const userName = userCourses[0]?.lectureDetails?.name
    ? userCourses[0]?.lectureDetails?.name
    : "xyz@gmail.com";
  // console.log("threshold", threshold);

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
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Settings</Button>
        </SheetTrigger>

        <SheetContent position="right" size="sm">
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Set Threshold value below</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4 ">
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
              <Label className="text-right ">CourseCode:</Label>
              <div className="  col-span-3">
                <CourseCodeSelector
                  setThreshold={setThreshold}
                  userCourses={userCourses}
                />
              </div>
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
              <Label className="text-center ">Sample PO|CO</Label>
              <div className="ml-1  col-span-3 ">
                <POCODemo />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-center">
                {" "}
                <p> POCO</p>{" "}
              </Label>
              <div className="mx-auto col-span-3 ">
                <input
                  className=" py-5 text-md  font-semibold px-4 border-2 bg-gray-200 border-dotted "
                  style={{ borderRadius: "10px" }}
                  type="file"
                  name="upload"
                  id="upload"
                  placeholder="Choose File"
                  onChange={uploadImage}
                />
              </div>
            </div>
          </div>
          <div className="grid justify-end gap-8 py-10  ">
            <SheetFooter className="">
              <SheetClose asChild>
                <Button
                  className="text-white  w-40 text-base transition duration-150 hover:scale-110  rounded-full hover:bg-gray-600 bg-black"
                  onClick={saveThresholdOnChange}
                >
                  {" "}
                  Save Changes
                </Button>
              </SheetClose>
            </SheetFooter>
            <SheetFooter className="">
              <SheetClose asChild>
                <Button
                  className="w-40 text-md  transition duration-150 hover:scale-110 text-white rounded-full hover:bg-red-600 bg-blue-500"
                  onClick={handleClick}
                >
                  {" "}
                  Logout
                </Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

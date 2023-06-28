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
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UserProfile({
  userCourses,
  open,
  setThreshold,
  setOpen,
  threshold,
}) {
  const [courseCode, setCourseCode] = useState(userCourses[0]?.courseCode);
  const dum = userCourses[0]?.mapData;
  useEffect(() => {
    if (!threshold) {
      setThreshold(
        userCourses?.[0]?.threshold ? userCourses?.[0]?.threshold : 60
      );
    }

    const query = `
      *[_type == 'admin' && courseCode == '${courseCode}']{
       _id
      }
    `;
    client.fetch(query).then((doc) => {
      setAdminId(doc[0]?._id);
    });
  }, []);

  const [adminId, setAdminId] = useState("");
  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];

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
      })
      .catch((e) => {
        toast.error("Please select the barcode", { position: "bottom-right" });
      });
  };

  const userName = userCourses[0]?.lectureDetails?.name
    ? userCourses[0]?.lectureDetails?.name
    : "xyz@gmail.com";

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
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Settings</Button>
        </SheetTrigger>

        <SheetContent
          className="max-w-[340px] md:max-w-2xl bg-black"
          position="right"
          size="content"
        >
          <SheetHeader>
            <SheetTitle className="text-white">Settings</SheetTitle>
            <SheetDescription className="text-white">
              Set Threshold value below
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4 text-white">
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
                  courseCode={courseCode}
                  setCourseCode={setCourseCode}
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
                placeholder={threshold}
                value={threshold}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-center">
                {" "}
                <p> POCO</p>{" "}
              </Label>
              <div className=" col-span-3 ">
                <button className="w-full rounded-[15px] flex justify-center flex-1 py-2 px-4 bg-white text-black font-bold">
                  <a href={`${dum}?dl=`}>Manuscript</a>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-center">
                {" "}
                <p> POCO</p>{" "}
              </Label>
              <div className=" col-span-3 ">
                <input
                  className="w-[200px] md:w-[250px] py-5 text-md text-black font-semibold px-4 border-2 bg-gray-200 border-dotted "
                  style={{ borderRadius: "10px" }}
                  type="file"
                  name="upload"
                  id="upload"
                  placeholder="Choose File"
                  onChange={uploadImage}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-center">
                {" "}
                <p> Archives</p>{" "}
              </Label>
              <div
                style={{ borderRadius: "10px" }}
                className=" w-[200px] md:w-[250px] transition duration-150 ease-in-out hover:scale-110  col-span-3 bg-gray-300  "
              >
                <button
                  onClick={() => {
                    navigate("/archive");
                  }}
                  className="py-3 font-bold text-xl text-black px-4 flex mx-auto"
                >
                  Archives
                </button>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-3   justify-between py-5">
            <SheetFooter className="">
              <SheetClose asChild>
                <Button
                  className="w-full text-md py-3 md:px-10 transition duration-150 hover:scale-110 text-white rounded-full hover:bg-red-600 bg-blue-500"
                  onClick={saveThresholdOnChange}
                >
                  {" "}
                  Save Changes
                </Button>
              </SheetClose>
            </SheetFooter>
            <SheetFooter className=" ">
              <SheetClose asChild>
                <Button
                  className="w-full text-md px-10 transition duration-150 hover:scale-110 text-white rounded-full hover:bg-red-600 bg-blue-500"
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

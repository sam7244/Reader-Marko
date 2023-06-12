import React from "react";
import FileUpload from "./FileUpload";
import DemoExcelExport from "./DemoExcelExport";
import UserProfile from "./UserProfile";
import { User } from "lucide-react";
import { useState } from "react";
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
const Home = ({ id }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const [open, setOpen] = useState(false);

  return (
    <div className=" items-center flex  h-[200] justify-center">
      <UserProfile open={open} setOpen={setOpen} />
      {/* 
      <div className="items-center flex justify-center h-full">
        <FileUpload id={id} />
        <button className=" border-y-2 border-gray-700" onClick={handleClick}>
          sign OUt
        </button>
        <DemoExcelExport />
      </div> */}
    </div>
  );
};

export default Home;

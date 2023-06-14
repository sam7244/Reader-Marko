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
import { client } from "../../lib/client";

export default function UserProfile({
  open,
  setThreshold,
  adminId,
  setOpen,
  threshold,
}) {
  const saveThresholdOnChange = async (e) => {
    e.preventDefault();
    client
      .patch(adminId)
      .set({ threshold: Number(threshold) })
      .commit()
      .then(() => window.location.reload());
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
                value="@peduarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Threshold
              </Label>
              <Input
                onChange={(e) => setThreshold(e.target.value)}
                id="username"
                value={threshold}
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button onClick={saveThresholdOnChange}> Save Changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

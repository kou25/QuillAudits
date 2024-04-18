import Folders from "@/components/Folders";
import React from "react";

export const IdeContainer = () => {
  return (
    <div className={`grid grid-cols-4 gap-3 text-white`}>
      <Folders />
      <div className=" p-2 h-full col-span-2 bg-quill-400 rounded-md">code</div>
      <div className="p-2 h-full bg-quill-400 rounded-md">count of issues</div>
    </div>
  );
};

export default IdeContainer;

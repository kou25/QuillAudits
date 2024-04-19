import React from "react";
import Image from "next/image";
import Logo from "../public/project.png";

const Toolbar = ({ title }: { title: string }) => {
  return (
    <div className="text-white my-2  pb-4 border-b border-gray-700 flex justify-between w-full px-4">
      <div className="flex items-center gap-1">
        <Image src={Logo} alt="Project-icon" width={"28"} height={"32"} />
        <h4 className="text-2xl">{title}</h4>
      </div>
      <div className="flex gap-4 mr-2">
        <button className="py-2 px-4 w-28 rounded-sm bg-quill-200 text-sm">
          Audit Now
        </button>
        <div className="relative">
          <button className="py-2 px-4 w-28 text-blue-500 rounded-sm bg-[#007AFF29] hover:bg-white text-sm">
            Options
          </button>
          <div className="absolute rounded-full p-1 w-2 h-2 bg-red-500 top-0 -right-1" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

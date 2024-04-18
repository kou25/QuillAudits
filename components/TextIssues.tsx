import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const TextIssues = ({
  text,
  id,
  parentId
}: {
  text: string;
  id: number;
  parentId: string;
}) => {
  return (
    <Link
      href={`/?issue=${parentId}&detailId=${id}`}
      className="bg-quill-300 px-4 py-2 rounded-md flex justify-between items-center gap-2 w-full mb-4 cursor-pointer"
    >
      <div className="flex items-center  w-10/12 border-r border-gray-600">
        <p className="text-[#CCCCCC] text-base">{text}</p>
      </div>
      <div className="w-2/12 flex items-center justify-center">
        <FaAngleRight className="text-gray-300 text-sm font-light w-4 h-5" />
      </div>
    </Link>
  );
};

export default TextIssues;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const IssueCard = ({
  id,
  color,
  count,
  text
}: {
  id: string;
  color: string;
  count: string;
  text: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${pathname}?issue=${id}`}
      className="bg-quill-300 px-2 py-2 rounded-md flex justify-between items-center gap-2 w-full mb-2 cursor-pointer"
    >
      <div className=" w-1/3 flex  items-center  border-r border-gray-600 gap-3 pl-5">
        <div className={`${color} w-3 rounded-full h-3`} />
        <div>
          <p className="text-2xl">{count}</p>
        </div>
      </div>
      <div className="w-2/3 flex justify-between items-center px-2">
        <div>
          <p className="text-base text-gray-400  w-2/3">{text}</p>
        </div>
        <FaAngleRight className="text-gray-300 text-sm font-light w-4 h-5" />
      </div>
    </Link>
  );
};

export default IssueCard;

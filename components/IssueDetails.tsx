import React from "react";
import { FaFlag } from "react-icons/fa6";

const IssueDetails = ({
  details,
  color
}: {
  details: {
    id: number;
    title: string;
    description: string;
    remediation: string;
  };
  color: string | undefined;
}) => {
  return (
    <div className="mx-2">
      <div className=" py-2">
        <div className="bg-quill-300 px-2 py-4 rounded-md flex items-center gap-2 w-full mb-2 cursor-pointer">
          <div className={`${color} w-3 rounded-full h-3`} />
          <p className="text-sm">{details.title}</p>
        </div>
      </div>
      <div className="bg-quill-300 px-2 py-4 rounded-md h-[calc(100vh-370px)] flex flex-col">
        <div className="flex-1 overflow-auto p-2">
          <p className="text-quill-200 font-medium">Description:</p>
          <p className="text-[#CCCCCC] text-sm mt-1 font-light mb-5">
            {" "}
            {details.description}
          </p>
          <p className="text-quill-200 font-medium">Remediation:</p>
          <p className="text-[#CCCCCC] text-sm mt-1 font-light">
            {" "}
            {details.remediation}
          </p>
        </div>
        <div className="py-2 px-2 flex items-center justify-end border-t border-gray-600 pt-4 gap-4">
          <div>
            <button className="py-2 px-4 w-auto rounded-sm bg-quill-200 text-sm h-10">
              Auto Fix Code
            </button>
          </div>
          <div className="w-10 h-10 border border-red-500 flex justify-center items-center rounded-md">
            <FaFlag className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;

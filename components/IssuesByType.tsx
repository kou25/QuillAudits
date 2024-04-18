import React from "react";
import TextIssues from "./TextIssues";

const IssuesByType = ({
  parentId,
  color,
  count,
  text,
  issues
}: {
  parentId: string;
  color: string;
  count: string;
  text: string;
  issues: {
    title: string;
    description: string;
    remediation: string;
    id: number;
  }[];
}) => {
  return (
    <div className="mx-2">
      <div className=" py-2">
        <div className="bg-quill-300 px-2 py-2 rounded-md flex justify-between items-center gap-2 w-full mb-2 cursor-pointer">
          <div className=" w-1/2 flex  items-center  border-r border-gray-600 gap-3 pl-5">
            <div className={`${color} w-3 rounded-full h-3`} />
            <div>
              <p className="text-2xl">{count}</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-between items-center px-4">
            <div>
              <p className="text-base text-gray-400">{text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 px-1 border-b border-gray-600 pb-4">
        <p className="text-sm text-white">List of Issues</p>
      </div>
      {issues.length > 0 ? (
        <div className="mt-4 h-[calc(100vh-450px)] overflow-y-scroll">
          {issues.map((issue, i) => (
            <TextIssues
              key={i}
              text={issue.title}
              id={issue.id}
              parentId={parentId}
            />
          ))}
        </div>
      ) : (
        <div className="mt-4 h-[calc(100vh-450px)] w-full">
          <p className="text-sm text-gray-500 text-center">No Issues Found</p>
        </div>
      )}
    </div>
  );
};

export default IssuesByType;

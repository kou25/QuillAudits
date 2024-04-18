import { listofIssues } from "@/lib/issues";
import React from "react";
import IssueCard from "./IssueCard";

const CurrentFileIssues = () => {
  return (
    <>
      <div className="my-4 bg-quill-300 p-2 flex justify-between items-center mx-2">
        <button className="py-2 px-4 w-28  rounded-sm bg-quill-200 text-sm flex-1">
          Current File
        </button>
        <div className="text-center flex-1 text-gray-500">Full Project</div>
      </div>
      <div className="flex-1 h-full px-2 overflow-scroll">
        {listofIssues.map((item) => (
          <IssueCard
            key={item.id}
            id={item.id}
            color={item.color}
            count={item.count}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
};

export default CurrentFileIssues;

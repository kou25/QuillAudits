import React from "react";
import { IoClose } from "react-icons/io5";

const EditorBreadcrumps = ({
  fileName,
  active,
  handleRemove,
  handleSelect
}: {
  fileName: string;
  active: boolean;
  handleRemove: () => void;
  handleSelect: () => void;
}) => {
  return (
    <div
      className={`w-fit  p-2 px-4 flex justify-between items-center ${
        active
          ? "bg-quill-200 text-white"
          : "text-[#5D677D] border-r border-gray-700"
      }   gap-2 rounded-t-md`}
      onClick={handleSelect}
    >
      <p className="text-xs">{fileName}</p>
      <IoClose
        className="w-4 h-4 cursor-pointer"
        onClick={(event) => {
          event.stopPropagation();
          handleRemove();
        }}
      />
    </div>
  );
};

export default EditorBreadcrumps;

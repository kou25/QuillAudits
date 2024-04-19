"use client";
import { explorer, folderInterface } from "@/lib/folders";
import React, { useState } from "react";
import Folder from "./Folder";

const Folders = ({
  onSelectFiles,
  selectCurrentFile
}: {
  onSelectFiles: (file: folderInterface) => void;
  selectCurrentFile: folderInterface | null;
}) => {
  const [explorerData] = useState<folderInterface>(explorer as folderInterface);

  return (
    <div className="p-2  h-[calc(100vh-190px)] bg-quill-400 rounded-md">
      <div className="px-2 py-2 border-b border-gray-700 mx-2">
        <p className="text-gray-300 text-sm font-light">Folders & Files</p>
      </div>
      <div className="p-2">
        <Folder
          explorer={explorerData}
          handleIdSelect={onSelectFiles}
          selectCurrentFile={selectCurrentFile}
        />
      </div>
    </div>
  );
};

export default Folders;

"use client";
import { explorer, folderInterface } from "@/lib/folders";
import React, { useState } from "react";
import Folder from "./Folder";

const Folders = () => {
  const [explorerData, setExplorerData] = useState<folderInterface>(
    explorer as folderInterface
  );
  const [selectId, setSelectId] = useState<string | null>(null);

  const handleIdSelect = (id: string) => {
    setSelectId(id);
  };
  return (
    <div className="p-2 min-h-[75vh] 2xl:min-h-[80vh] h-full bg-quill-400 rounded-md">
      <div className="px-2 py-2 border-b border-gray-700 mx-2">
        <p className="text-gray-300 text-sm font-light">Folders & Files</p>
      </div>
      <div className="p-2">
        <Folder
          explorer={explorerData}
          handleIdSelect={handleIdSelect}
          selectId={selectId}
        />
      </div>
    </div>
  );
};

export default Folders;

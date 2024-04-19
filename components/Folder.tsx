"use client";
import Image from "next/image";
import { folderInterface } from "@/lib/folders";
import React, { useState } from "react";
import FolderImage from "../public/folder.png";
import FolderOpenendImage from "../public/openedFolder.png";
import FileImage from "../public/file.png";
import OpenedFileImage from "../public/openedFile.png";
import { AiFillCaretRight } from "react-icons/ai";

const Folder = ({
  explorer,
  handleIdSelect,
  selectCurrentFile
}: {
  explorer: folderInterface;
  handleIdSelect: (file: folderInterface) => void;
  selectCurrentFile: folderInterface | null;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  if (explorer.isFolder) {
    return (
      <div className="mt-1">
        <div
          className="mt-1  flex items-center justify-between p-1 w-full cursor-pointer"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          style={{ userSelect: "none" }}
        >
          <div className="my-0 mx-1 flex text-sm">
            <AiFillCaretRight
              className={`text-gray-500 h-4 w-4 mr-2 transform ${
                isExpanded ? "rotate-90 text-blue-600" : ""
              }`}
            />
            <Image
              src={isExpanded ? FolderOpenendImage : FolderImage}
              alt="folder"
              width={"16"}
              height={"14"}
              className="object-contain mr-2"
            />{" "}
            <p className={`${isExpanded ? "text-blue-600 font-medium" : ""}`}>
              {explorer.name}
            </p>
          </div>
        </div>
        <div className={`pl-5 none ${isExpanded ? "block" : "hidden"}`}>
          {explorer?.children?.map((exp) => (
            <Folder
              key={exp.id}
              explorer={exp}
              handleIdSelect={handleIdSelect}
              selectCurrentFile={selectCurrentFile}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`my-2 pl-2 flex text-sm cursor-pointer ${
          selectCurrentFile?.id === explorer.id
            ? "text-blue-600 font-medium"
            : "text-gray-300 font-normal"
        }`}
        onClick={() => {
          handleIdSelect(explorer);
        }}
      >
        <Image
          src={
            selectCurrentFile?.id === explorer.id ? OpenedFileImage : FileImage
          }
          alt="folder"
          width={"12"}
          height={"16"}
          className="object-contain mr-2"
        />
        {explorer.name}
      </div>
    );
  }
};

export default Folder;

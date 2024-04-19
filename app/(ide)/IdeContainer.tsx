"use client";
import CodeEditor from "@/components/CodeEditor";
import Folders from "@/components/Folders";
import Issues from "@/components/Issues";
import { folderInterface } from "@/lib/folders";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const IdeContainer = () => {
  const [leftExapnded, setLeftExpanded] = useState<boolean>(true);
  const [rightExapnded, setRightExpanded] = useState<boolean>(true);
  const [selectedFiles, setSelectedFiles] = useState<folderInterface[]>([]);
  const [selectCurrentFile, setSelectCurrentFile] =
    useState<folderInterface | null>(null);
  const router = useRouter();
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (!redirected) {
      router.push("/", { scroll: false });
      setRedirected(true);
    }
  }, [redirected, router]);

  const toggleLeft = () => {
    setLeftExpanded(!leftExapnded);
  };

  const toggleRight = () => {
    setRightExpanded(!rightExapnded);
  };

  const handleSelectedFiles = (file: folderInterface) => {
    if (!selectedFiles.find((f) => f.id === file.id)) {
      //add it in the beginning
      setSelectedFiles([file, ...selectedFiles]);
    }
  };

  const handleSelect = (file: folderInterface) => {
    setSelectCurrentFile(file);
    handleSelectedFiles(file);
  };

  const handleRemove = (id: string) => {
    const findFiles = selectedFiles.filter((f) => f.id !== id);
    setSelectedFiles(findFiles);
    setSelectCurrentFile(findFiles.length > 0 ? findFiles[0] : null);
  };

  return (
    <div
      className={`grid ${
        leftExapnded && rightExapnded
          ? "grid-cols-4"
          : leftExapnded || rightExapnded
          ? "grid-cols-3"
          : "grid-cols-2"
      } gap-3 text-white`}
    >
      {leftExapnded && (
        <Folders
          selectCurrentFile={selectCurrentFile}
          onSelectFiles={handleSelect}
        />
      )}
      <CodeEditor
        selectCurrentFile={selectCurrentFile}
        leftExapnded={leftExapnded}
        rightExapnded={rightExapnded}
        toggleLeft={toggleLeft}
        toggleRight={toggleRight}
        selectedFiles={selectedFiles}
        handleRemove={handleRemove}
        handleSelect={handleSelect}
      />
      {rightExapnded && <Issues isVisible={selectCurrentFile} />}
    </div>
  );
};

export default IdeContainer;

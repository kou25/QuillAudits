"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Collapse from "../public/collapse.png";
import Editor, { Monaco } from "@monaco-editor/react";
import EditorBreadcrumps from "./EditorBreadcrumps";
import { folderInterface } from "@/lib/folders";
import { ThemeProvider } from "../utils/theme";

const CodeEditor = ({
  selectCurrentFile,
  leftExapnded,
  rightExapnded,
  toggleLeft,
  toggleRight,
  selectedFiles,
  handleRemove,
  handleSelect
}: {
  selectCurrentFile: folderInterface | null;
  leftExapnded: boolean;
  rightExapnded: boolean;
  toggleLeft: () => void;
  toggleRight: () => void;
  selectedFiles: folderInterface[];
  handleRemove: (id: string) => void;
  handleSelect: (file: folderInterface) => void;
}) => {
  const editorRef = useRef<Monaco | null>(null);

  function handleEditorWillMount(monaco: Monaco) {
    //@ts-ignore
    monaco.editor.defineTheme("dark", ThemeProvider);
  }

  useEffect(() => {
    if (selectCurrentFile) {
      //@ts-ignore
      editorRef.current?.focus();
    }
  }, [selectCurrentFile, selectCurrentFile?.id]);

  return (
    <div className="h-[calc(100vh-190px)] col-span-2 rounded-md flex flex-col">
      <div className="h-8 w-full bg-quill-100 ">
        <div className="w-full overflow-x-scroll flex rounded-t-md">
          {selectedFiles.map((file) => (
            <EditorBreadcrumps
              key={file.id}
              fileName={file?.name || ""}
              active={file.id === selectCurrentFile?.id}
              handleRemove={() => handleRemove(file.id)}
              handleSelect={() => handleSelect(file)}
            />
          ))}
        </div>
      </div>

      <div className="relative p-2 h-auto  bg-quill-400  flex-1">
        {selectedFiles.length > 0 ? (
          <Editor
            theme="dark"
            width="100%"
            height="100%"
            defaultLanguage="javascript"
            path={selectCurrentFile?.name}
            beforeMount={handleEditorWillMount}
            defaultValue={selectCurrentFile?.code}
            //@ts-ignore
            onMount={(editor) => (editorRef.current = editor)}
          />
        ) : (
          <div className="flex justify-center items-center w-full h-full text-gray-500">
            No file selected
          </div>
        )}
        <div
          className={`bg-blue-500  h-5 w-5 absolute -left-2 bottom-5 rounded-sm`}
          onClick={toggleLeft}
        >
          <div
            className={`flex justify-center items-center w-full h-full ${
              leftExapnded ? "" : "rotate-180"
            } cursor-pointer`}
          >
            <Image
              src={Collapse}
              alt="collapse/expand"
              width={"10"}
              height={"10"}
            />
          </div>
        </div>
        <div
          className={`bg-blue-500  h-5 w-5 absolute -right-2 bottom-5 rounded-sm`}
          onClick={toggleRight}
        >
          <div
            className={`flex justify-center items-center w-full h-full ${
              !rightExapnded ? "" : "rotate-180"
            } cursor-pointer`}
          >
            <Image
              src={Collapse}
              alt="collapse/expand"
              width={"10"}
              height={"10"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

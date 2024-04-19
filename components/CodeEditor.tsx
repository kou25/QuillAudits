"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Collapse from "../public/collapse.png";
import Editor, { Monaco } from "@monaco-editor/react";
import { IoClose } from "react-icons/io5";
import EditorBreadcrumps from "./EditorBreadcrumps";

const CodeEditor = ({
  leftExapnded,
  rightExapnded,
  toggleLeft,
  toggleRight
}: {
  leftExapnded: boolean;
  rightExapnded: boolean;
  toggleLeft: () => void;
  toggleRight: () => void;
}) => {
  const editorRef = useRef<Monaco | null>(null);

  function handleEditorWillMount(monaco: Monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.editor.defineTheme("dark", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.foreground": "#F8F8F8",
        "editor.background": "#12161A",
        "editor.selectionBackground": "#253B76",
        "editor.lineHighlightBackground": "#FFFFFF0F",
        "editorCursor.foreground": "#FFFFFFA6",
        "editorWhitespace.foreground": "#FFFFFF40"
      }
    });
  }

  useEffect(() => {
    //@ts-ignore
    editorRef.current?.focus();
  }, []);

  return (
    <div className="h-[calc(100vh-190px)] col-span-2 rounded-md flex flex-col">
      <div className="h-8 w-full bg-quill-100 ">
        <div className="w-full overflow-x-scroll flex rounded-t-md">
          <EditorBreadcrumps fileName="Example file 1" active={true} />
          <EditorBreadcrumps fileName="Example file 2" active={false} />
        </div>
      </div>

      <div className="relative p-2 h-auto  bg-quill-400  flex-1">
        <Editor
          theme="dark"
          width="100%"
          height="100%"
          defaultLanguage="javascript"
          beforeMount={handleEditorWillMount}
          defaultValue="// some comment"
          //@ts-ignore
          onMount={(editor) => (editorRef.current = editor)}
        />
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

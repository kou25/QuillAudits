import React from "react";
import Image from "next/image";
import Collapse from "../public/collapse.png";

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
  return (
    <div className="relative p-2 min-h-[75vh] 2xl:min-h-[80vh] h-full col-span-2 bg-quill-400 rounded-md">
      code
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
  );
};

export default CodeEditor;

"use client";
import CodeEditor from "@/components/CodeEditor";
import Folders from "@/components/Folders";
import Issues from "@/components/Issues";
import React, { useState } from "react";

export const IdeContainer = () => {
  const [leftExapnded, setLeftExpanded] = useState<boolean>(true);
  const [rightExapnded, setRightExpanded] = useState<boolean>(true);

  const toggleLeft = () => {
    setLeftExpanded(!leftExapnded);
  };

  const toggleRight = () => {
    setRightExpanded(!rightExapnded);
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
      {leftExapnded && <Folders />}
      <CodeEditor
        leftExapnded={leftExapnded}
        rightExapnded={rightExapnded}
        toggleLeft={toggleLeft}
        toggleRight={toggleRight}
      />
      {rightExapnded && <Issues />}
    </div>
  );
};

export default IdeContainer;

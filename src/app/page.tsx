"use client";

import { appStyles } from "@/shared/styles";

import { Code } from "bright";
import { useState } from "react";

export default function HomePage() {
  const [visible, setIsVisible] = useState(false);

  const myCode = `
let hello = "hello brightness"
console.log(hello, "my old friend")
`.trim();

  return (
    <div className={appStyles.container}>
      <button onClick={() => setIsVisible(true)} className={appStyles.button}>
        Show me Code
      </button>
      <Code lang="js" title="example.js">
        {myCode}
      </Code>
    </div>
  );
}

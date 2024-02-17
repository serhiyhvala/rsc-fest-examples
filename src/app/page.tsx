import { appStyles } from "@/shared/styles";

import { Code } from "bright";
import { Revealable } from "@/shared/ui";

export default function HomePage() {
  const myCode = `
let hello = "hello brightness"
console.log(hello, "my old friend")
`.trim();

  return (
    <div className={appStyles.container}>
      <Revealable>
        <Code lang="js" title="example.js">
          {myCode}
        </Code>
      </Revealable>
    </div>
  );
}

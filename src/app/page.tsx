import { appStyles } from "@/shared/styles";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={appStyles.container}>
      <Link href="/post">See Example Blog Post</Link>
    </div>
  );
}

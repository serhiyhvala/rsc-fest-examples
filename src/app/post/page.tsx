import { appStyles } from "@/shared/styles";
import { Comments } from "@/widgets/comments";

export default function PostPage() {
  return (
    <div className={appStyles.container}>
      <h2>Example Blog Post</h2>
      <div className={appStyles.post}>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}
      </div>
      <Comments />
    </div>
  );
}

import { homeStyles } from "@/shared/styles";
import { HitCounter } from "@/shared/ui";

export default async function HomePage() {
  return (
    <div className={homeStyles.container}>
      <h3>Hello!</h3>
      <span>
        You are visitor number <HitCounter />
      </span>
    </div>
  );
}

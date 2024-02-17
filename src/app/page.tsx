import { appStyles } from "@/shared/styles";
import { Clock } from "@/shared/ui";

export default function HomePage() {
  return (
    <div className={appStyles.container}>
      <Clock />
    </div>
  );
}

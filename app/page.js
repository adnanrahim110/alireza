import { buildMetadata } from "@/content/site-content";
import HomePage from "@/components/home/HomePage";

export const metadata = buildMetadata("home");

export default function Home() {
  return <HomePage />;
}

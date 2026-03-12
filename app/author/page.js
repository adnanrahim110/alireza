import { buildMetadata } from "@/content/site-content";
import AuthorPage from "@/components/author/AuthorPage";

export const metadata = buildMetadata("author");

export default function Author() {
  return <AuthorPage />;
}

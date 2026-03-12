import { buildMetadata } from "@/content/site-content";
import BookPage from "@/components/book/BookPage";

export const metadata = buildMetadata("book");

export default function Book() {
  return <BookPage />;
}

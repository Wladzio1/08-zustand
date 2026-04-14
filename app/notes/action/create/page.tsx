import { Metadata } from "next";
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";

export const metadata: Metadata = {
  title: "Create New Note | NoteHub",
  description: "Create a new note to stay organized.",
  openGraph: {
    title: "Create New Note | NoteHub",
    description: "Easily create and save your notes.",
    url: "https://twoja-strona.com",
    images: [{ url: "https://goit.global" }],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}

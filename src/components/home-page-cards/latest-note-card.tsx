import Link from "next/link";
import { HomePageCard } from "../stateless/card";
import { NoteListSchema } from "../../lib/notion-api-client";

export default function LatestNoteCard({ note }: { note?: NoteListSchema }) {
  console.log("notes", note);
  return (
    <HomePageCard>
      <h3 className="text-lg self-center">📝 Latest note</h3>
      <div className="h-[1px] bg-secondary-reallight my-4" />
      <h5 className="font-semibold">{note?.name}</h5>
      <p className="text-secondary mt-3">{note?.previewDesc}</p>
      <button className="bg-accent mt-4 p-2 rounded-xl">
        <Link href="/notes">Explore all notes</Link>
      </button>
    </HomePageCard>
  );
}

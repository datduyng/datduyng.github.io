import cn from "classnames";
import Link from "next/link";
import { NoteListSchema } from "../lib/notion-api-client";
import { useRouter } from "next/router";

interface NoteListProps {
  notes?: NoteListSchema[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  if (!notes) {
    return <></>;
  }
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 w-full">
      {notes.map((note) => (
        <NoteCardItem
          onClick={() => {
            router.push(`notes/${note.id}`);
          }}
        >
          <h3 className="text-2xl font-bold cursor-pointer">
            {note.name || ""}
          </h3>
          <h6 className="text-md text-white mt-1">{note.previewDesc}</h6>
          <p className="text-secondary text-sm mt-1">{note.publishedDate}</p>
        </NoteCardItem>
      ))}
    </div>
  );
};

export const NoteCardItem: React.FC<{ onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <div
      className={cn("flex flex-col px-5 py-6 cursor-pointer")}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NoteList;

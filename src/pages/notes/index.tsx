import type { NextPage, GetStaticProps } from "next";
import DefaultLayout from "../../components/default-layout";
import {
  getMyNotionNoteListData,
  NoteListSchema,
} from "../../lib/notion-api-client";

const NoteIndex: NextPage<NoteIndexProps> = ({ notes }) => {
  console.log("notes", notes);

  return (
    <DefaultLayout>
      <NoteHeaderCard />
      {notes?.map((note) => {
        return <div className="text-secondary">{note.name}</div>;
      })}
    </DefaultLayout>
  );
};

const NoteHeaderCard = () => {
  return (
    <div className="flex flex-row flex-wrap-reverse sm:flex-nowrap px-8 py-8">
      <div>
        <h1 className="text-4xl font-bold">📝 Featured Notes</h1>
        {/* <h3 className="text-2xl font-bold">Tech @ Microsoft</h3> */}
        <p className="font-normal text-secondary mt-3">
          This is a space for me to keep notes and share my weekly learning
          process. I write about web developments and tech careers. Hope you
          enjoy!
        </p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notes = (await getMyNotionNoteListData()) || [];
  console.log("notes", notes);
  return {
    props: {
      notes,
    } as NoteIndexProps,
  };
};

interface NoteIndexProps {
  notes: (NoteListSchema & {
    page_cover?: string | undefined;
    page_icon?: string | undefined;
    page_emoji?: string | undefined;
  })[];
}

export default NoteIndex;

import type { NextPage } from "next";
import DefaultLayout from "../../components/default-layout";

const NoteIndex: NextPage = () => {
  return <DefaultLayout>
    <NoteHeaderCard />
  </DefaultLayout>
}

const NoteHeaderCard = () => {
  return (<div className="flex flex-row flex-wrap-reverse sm:flex-nowrap px-8 py-8">
    <div>
      <h1 className="text-4xl font-bold">📝 Featured Notes</h1>
      {/* <h3 className="text-2xl font-bold">Tech @ Microsoft</h3> */}
      <p className="font-normal text-secondary mt-3">
        This is a space for me to keep notes and share my weekly 
        learning process. I write about web developments and tech careers. 
        Hope you enjoy!
      </p>
    </div>
  </div>)
}




export default NoteIndex;
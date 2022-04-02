import type { NextPage, GetStaticProps } from "next";
import DefaultLayout from "../../components/default-layout";

const NoteIdPage: NextPage<NoteProps> = ({ }) => {
  return (
    <DefaultLayout>
      <h1>hellow</h1>
    </DefaultLayout>
  );
};

export default NoteIdPage;

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//     } as NoteProps,
//   };
// };

interface NoteProps {
}

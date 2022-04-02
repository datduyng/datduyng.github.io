import type { NextPage, GetStaticProps } from "next";
import DefaultLayout from "../../components/default-layout";
import { NotionAPI } from 'notion-client';
import type * as notion from 'notion-types';
import { NotionRenderer } from 'react-notion-x'
import Image from 'next/image'
import Link from 'next/link'

const NoteIdPage: NextPage<NoteProps> = ({ recordMap }) => {
  return (
    <DefaultLayout>
      {recordMap && <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} components={{
      nextImage: Image,
      nextLink: Link
    }}/>}
    </DefaultLayout>
  );
};

export default NoteIdPage;

const notionApi = new NotionAPI();

export const getStaticProps: GetStaticProps = async ({params}) => {
  console.log("params", params);
  const recordMap = await notionApi.getPage('067dd719a912471ea9a3ac10710e7fdf')
  return {
    props: {
      recordMap
    } as NoteProps,
  };
};

export function getStaticPaths() {
  return {
    paths: [
    ],
    fallback: true // false or 'blocking'
  };
}

interface NoteProps {
  recordMap?: notion.ExtendedRecordMap;
}

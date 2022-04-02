import type { NextPage, GetStaticProps } from "next";
import { NotionAPI } from 'notion-client';
import type * as notion from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import DefaultLayout from "../../components/default-layout";

//@ts-ignore
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)

//@ts-ignore
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)


const NoteIdPage: NextPage<NoteProps> = ({ recordMap }) => {
  return (
    <DefaultLayout>
      {recordMap && <NotionRenderer 
        recordMap={recordMap} 
        fullPage={true} 
        darkMode={true} 
        disableHeader={true}
        components={{
          nextImage: Image,
          nextLink: Link,
          Code,
          Collection,
        }}
        showTableOfContents={true}
        minTableOfContentsItems={1}
        previewImages={!!recordMap.preview_images}
        />}
    </DefaultLayout>
  );
};

export default NoteIdPage;

const notionApi = new NotionAPI();
export const getStaticProps: GetStaticProps = async ({params}) => {
try {
    const recordMap = await notionApi.getPage(params?.noteId as string);
    if (!recordMap) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        recordMap
      } as NoteProps,
    };
  } catch (e) {
    console.error('errrrrrreereer', e);
    return {
      notFound: true,
    }
  }
}

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

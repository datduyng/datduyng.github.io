// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getMyRecentWatch } from "../../lib/letterboxd-client";
import { getTopArtist } from "../../lib/spotify-client";
import { NotionAPI } from "notion-client";
import type * as notion from "notion-types";

type Data = {
  name?: string;
  artists?: any;
  movies?: any;
  notionPage?: any;
  notionColleciton?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const artists = await getTopArtist();
  const movies = await getMyRecentWatch();

  const notionPage = await notionApi.getPage(
    "53ab34eea28243eaa145cd8aa9cb814a"
  );
  //@ts-ignore
  const notionColleciton = await notionApi.getCollectionData(
    "25263329-730b-4340-aedb-5d40eb0781b4",
    "e1cad471-10f7-4bf4-98c7-23bf24fa1f68"
  );

  res.status(200).json({
    // name: 'John Doe', artists, movies, notionPage,
    notionColleciton,
  });
}

const notionApi = new NotionAPI();

const getMyNotionNoteListData = () => {
  //@ts-ignore
  const notionCollection = await notionApi.getCollectionData(
    "25263329-730b-4340-aedb-5d40eb0781b4",
    "e1cad471-10f7-4bf4-98c7-23bf24fa1f68",
    null,
    {
      limit: 100000,
    }
  );
  const noteIds = notionCollection.result.blockIds;
};

type NoteCollectionSchemaKey =
  | "name"
  | "published"
  | "archived"
  | "previewDesc"
  | "publishedDate"
  | "tags"
  | "title";

class NotionCollectionParser {
  private notionCollection: notion.CollectionInstance;
  private schemaKeys: Set<string>;
  private collectionId: string;
  private collectionPropSchemaMap: {
    [key: string]: notion.CollectionPropertySchema;
  };

  constructor(
    collectionId: string,
    notionCollection: notion.CollectionInstance,
    schemaKeys: string[]
  ) {
    this.notionCollection = notionCollection;
    this.schemaKeys = new Set<string>(schemaKeys);
    this.collectionId = collectionId;
    this.collectionPropSchemaMap = {};
    this.parseCollectionPropSchemaMap();
  }

  public getListPreview() {}

  private parseCollectionPropSchemaMap() {
    const collection =
      this.notionCollection.recordMap.collection?.[this.collectionId];
    if (!collection) {
      return null;
    }
    Object.entries(collection.value.schema).forEach(([key, value]) => {
      this.collectionPropSchemaMap[key] = value;
    });
  }
}

const getBlockPreview = (
  notionCollection: notion.CollectionInstance,
  blockId: string
) => {
  const block = notionCollection.recordMap.block[blockId];
  if (!block) {
    return null;
  }

  return {
    title: block.value.properties.title?.[0]?.[0],
  };
};

import NotionCollectionParser from "./notion-collection-parser";

const NOTION_NOTES_COLLECTION_ID = process.env.NOTION_NOTES_COLLECTION_ID;
const NOTION_NOTES_COLLECTION_VIEW_ID =
  process.env.NOTION_NOTES_COLLECTION_VIEW_ID;

if (!NOTION_NOTES_COLLECTION_ID || !NOTION_NOTES_COLLECTION_VIEW_ID) {
  throw new Error(
    "Invalid NOTION_NOTES_COLLECTION_ID and NOTION_NOTES_COLLECTION_ID"
  );
}

const noteListSchema = [
  "name",
  "published",
  "archived",
  "previewDesc",
  "publishedDate",
  "tags",
] as const;

export type NoteListSchema = {
  id: string;
  name?: string;
  previewDesc?: string;
  published?: string;
  archived?: boolean;
  publishedDate?: string;
  tags?: string[];
  page_cover?: string | undefined;
  page_icon?: string | undefined;
  page_emoji?: string | undefined;
};

export const getMyNotionNoteListData = async () => {
  const notionCollection =
    await NotionCollectionParser.notionApi.getCollectionData(
      NOTION_NOTES_COLLECTION_ID,
      NOTION_NOTES_COLLECTION_VIEW_ID,
      null,
      {
        limit: 100000,
      }
    );

  const notionCollectionParser = new NotionCollectionParser<NoteListSchema>(
    NOTION_NOTES_COLLECTION_ID,
    notionCollection,
    noteListSchema as any
  );

  return notionCollectionParser.getListPreview();
};

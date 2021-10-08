import { Db } from "mongodb";
import Song from "../types/Song";

export const getDatabaseSavedSongs = async (
  db: Db,
  userId: string
): Promise<Song[]> => {
  const document = await db.collection("saved-songs").findOne({ userId });
  return document?.songs ?? [];
};

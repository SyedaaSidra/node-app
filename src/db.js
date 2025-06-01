import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { json } from "node:stream/consumers";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const db_PATH = path.join(__dirname, "../DB.json");

export const getDbData = async () => {
  const db_data = await fs.readFile(db_PATH, "utf-8");
  return JSON.parse(db_data);
};

export const WriteToDB = async (db) => {
  await fs.writeFile(db_PATH, JSON.stringify(db, null, 2));
  return db;
};

export const insert = async (db) => {
  const db_data = await getDbData();
  console.log(db);
  db_data.notes.push(db);
  console.log(db_data);
  await WriteToDB(db_data);
  return db;
};

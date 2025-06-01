import { getDbData, WriteToDB, insert } from "./db.js";

export const create = async (note, tags) => {
  const newNote = {
    content: note,
    tags,
    id: Date.now(),
  };

  await insert(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const note = await getDbData();
  return note.notes;
};

export const findNotes = async (filter) => {
  const allNotes = await getAllNotes();
  console.log(filter);
  return allNotes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const newNotes = (await getAllNotes()).filter((note) => note.id != id);
  WriteToDB({ notes: newNotes });
  return id;
};

export const removeAllNotes = async () => {
  await WriteToDB({ notes: [] });
};

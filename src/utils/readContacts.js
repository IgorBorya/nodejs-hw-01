import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encording: 'utf-8' });
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts', error);
    return [];
  }
};

readContacts().catch((error) => console.error(error));

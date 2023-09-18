import { PetInterface } from 'interfaces/pet';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  created_at?: any;
  updated_at?: any;
  pet_id?: string;

  pet?: PetInterface;
  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  pet_id?: string;
}

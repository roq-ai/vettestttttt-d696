import { EventInterface } from 'interfaces/event';
import { NoteInterface } from 'interfaces/note';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface PetInterface {
  id?: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  created_at?: any;
  updated_at?: any;
  customer_id?: string;
  event?: EventInterface[];
  note?: NoteInterface[];
  customer?: CustomerInterface;
  _count?: {
    event?: number;
    note?: number;
  };
}

export interface PetGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  species?: string;
  breed?: string;
  customer_id?: string;
}

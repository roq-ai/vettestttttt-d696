import { PetInterface } from 'interfaces/pet';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  title: string;
  description: string;
  date: any;
  created_at?: any;
  updated_at?: any;
  pet_id?: string;

  pet?: PetInterface;
  _count?: {};
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  pet_id?: string;
}

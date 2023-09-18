import { PetInterface } from 'interfaces/pet';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  email_address: string;
  created_at?: any;
  updated_at?: any;
  user_id?: string;
  pet?: PetInterface[];
  user?: UserInterface;
  _count?: {
    pet?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  phone_number?: string;
  email_address?: string;
  user_id?: string;
}

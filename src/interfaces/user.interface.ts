import { Roles } from '../enums/roles.enum';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  dateBirth: Date;
  address: Array<UserAddress>;
  role: Array<Roles>;
}

interface UserAddress {
  country: 'string';
  city: 'string';
  street: 'string';
  apartment: 'string';
  apartmentSuite?: 'string';
}

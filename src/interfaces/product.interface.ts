import { Tags } from '../enums/tags.enum';

export interface Product {
  id?: string;
  name: string;
  price: string;
  count: string;
  tags: Array<Tags>;
  createAt?: Date;
  updateAt?: Date;
}

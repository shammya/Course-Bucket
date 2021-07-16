export class Category {
  id: number;
  name: string;
  parentName: string;
  adminId: string;
  children: Array<Category>;
}

export {};

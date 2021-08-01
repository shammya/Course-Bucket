export class Category {
  id: number;
  name: string;
  parentName: string;
  adminId: string;
  children: Array<Category>;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export interface CategoryTreeNode {
  category: Category;
  child: Array<CategoryTreeNode>;
}

var i = 1;
export const categoryList: Array<CategoryTreeNode> = [
  {
    category: new Category(i++, "Category " + (i - 1)),
    child: [
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
    ],
  },
  {
    category: new Category(i++, "Category " + (i - 1)),
    child: [
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
    ],
  },
  {
    category: new Category(i++, "Category " + (i - 1)),
    child: [
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
    ],
  },
  {
    category: new Category(i++, "Category " + (i - 1)),
    child: [
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
    ],
  },
  {
    category: new Category(i++, "Category " + (i - 1)),
    child: [
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [
          {
            category: new Category(i++, "Category " + (i - 1)),
            child: [],
          },
        ],
      },
    ],
  },
  {
    category: new Category(i++, "Category " + (i - 1)),
    child: [
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [],
      },
    ],
  },
  {
    category: new Category(i++, "Category " + (i - 1)),
    child: [
      {
        category: new Category(i++, "Category " + (i - 1)),
        child: [],
      },
    ],
  },
];
export {};

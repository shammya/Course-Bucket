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

// export interface CategoryTreeNode extends Category {
//   children: Array<CategoryTreeNode>;
// }

// var i = 1;
// export const categoryList: Array<CategoryTreeNode> = [
//   {
//     category: new Category(i++, "Category " + (i - 1)),
//     children: [
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     category: new Category(i++, "Category " + (i - 1)),
//     children: [
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     category: new Category(i++, "Category " + (i - 1)),
//     children: [
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     category: new Category(i++, "Category " + (i - 1)),
//     children: [
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     category: new Category(i++, "Category " + (i - 1)),
//     children: [
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [
//           {
//             category: new Category(i++, "Category " + (i - 1)),
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     category: new Category(i++, "Category " + (i - 1)),
//     children: [
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [],
//       },
//     ],
//   },
//   {
//     category: new Category(i++, "Category " + (i - 1)),
//     children: [
//       {
//         category: new Category(i++, "Category " + (i - 1)),
//         children: [],
//       },
//     ],
//   },
// ];
export {};

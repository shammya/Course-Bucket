export class Files {
  id: number;
  type: "ICON" | "VIDEO" | "PICTURE" | "PDF" | "ARTICLE" | "LINK";
  title: string;
  content: string;
  uploadTime: Date;
  lastUpdateTime: Date;

  constructor(
    type: "ICON" | "VIDEO" | "PICTURE" | "PDF" | "ARTICLE" | "LINK",
    title: string = "",
    content: string
  ) {
    this.type = type;
    this.title = title;
    this.content = content;
  }
}

export {};

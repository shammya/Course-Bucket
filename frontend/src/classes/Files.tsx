export class Files {
  id: number;
  type: FileType;
  title: string;
  content: string;
  uploadTime: Date;
  lastUpdateTime: Date;
}

export class FileType {
  id: string;
  typeName: string;
  adminId: string;
}

export {};

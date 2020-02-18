type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型
  createAt: Date | undefined; // 类 // 构造函数
}
type Tag = {
  id: number;
  name: string;
}
type message = 'duplicated' | 'success' | 'not found'

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: number) => boolean;
  updateTag: (id: number, name: string) => message;
  findTag: (id: number) => Tag | undefined;
  recordList: RecordItem[];
}
type RecordItem = {
  id: number;
  selectedTags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型
  createAt: string | undefined; // 类 // 构造函数
}
type Tag = {
  id: number;
  name: string;
}
type message = 'duplicated' | 'success' | 'not found'




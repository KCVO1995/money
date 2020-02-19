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




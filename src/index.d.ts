type LoginForm = {
  username: string;
  password: string;
}
type RegisterForm = {
  username: string;
  password: string;
  passwordConfirmation: string;
}
type User = {
  id: number;
  username: string;
  created_at: Date;
  updated_at: Date;
}

type Tag = {
  id: number;
  name: string;
  user_id: number | undefined;
  record_id: number[] | null;
  created_at: Date;
  updated_at: Date;
}

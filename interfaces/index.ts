export interface ITodo {
  id?: string;
  title: string;
  body: string | null;
  userId: string | null;
  completed: boolean;
  createdAt?: Date;
}

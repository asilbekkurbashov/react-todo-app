export type T_TaskItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  directory: string;
  important: boolean;
  completed: boolean;
};
export interface I_Task {
  task: T_TaskItem | null;
}

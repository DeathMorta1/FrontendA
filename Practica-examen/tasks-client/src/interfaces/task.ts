export interface TaskInsert {
    description: string;
}

export interface Task extends TaskInsert {
    id: number;
    finished: boolean;
}

export interface FinishedUpdate {
    finished: boolean;
}

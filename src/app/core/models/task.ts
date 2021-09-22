export interface Task {
    id?: string;
    name: string,
    date?: Date,
    status: boolean
    expiring?:boolean
}

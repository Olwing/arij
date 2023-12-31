import { SystemRecord, UserInfo } from './index';

export enum TaskStatus {
	To_Do = 'To_Do',
	In_Progress = 'In_Progress',
	Closed = 'Closed'
}

export interface Task<T = string> extends SystemRecord<T>, UserInfo {
	name: string;
	description: string;
    status: TaskStatus;
}
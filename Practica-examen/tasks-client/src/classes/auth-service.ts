import { Http } from "../http";
import { SingleTaskResponse } from "../interfaces/responses";
import { FinishedUpdate, Task, TaskInsert } from "../interfaces/task";
import { SERVER } from "./constants";

export class AuthService{
    #http;

    constructor(){
        this.#http = new Http();
    }

    async getTasks(){
        const response = await this.#http.get<{tasks:Task[]}>(`${SERVER}/tasks`);
        return response.tasks;
    }

    async postTask(description:string){
        const response=await this.#http.post<SingleTaskResponse,TaskInsert>(`${SERVER}/tasks`,{description});
        return response;
    }

    async deleteTask(id:number){
        await this.#http.delete(`${SERVER}/tasks/${id}`);
    }

    async updateTask(id:number,finish:boolean){
        return this.#http.put<SingleTaskResponse,FinishedUpdate>(`${SERVER}/tasks/${id}/finished`,{finished:finish});
    }
}
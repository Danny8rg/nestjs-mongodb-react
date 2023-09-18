import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose' 
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';
import { createTaskDto } from 'src/dto/create-task.dto';
import { updateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

    findAll(){
        return this.TaskModel.find();
    }

    async create(createTask: createTaskDto ){
        const newTask = new this.TaskModel(createTask)
        return newTask.save()
        
    }

    async findOne(id: string){
        return this.TaskModel.findById(id); 
    }

    async delete (id: string){
        return this.TaskModel.findByIdAndDelete(id);
    }

    async update (id: string, Task: updateTaskDto){
        return this.TaskModel.findByIdAndUpdate(id, Task, {new: true});
    }

}
 
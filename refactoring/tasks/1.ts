class Task {
    title: string;
    isCompleted: boolean;

    constructor(title: string) {
        this.title = title;
        this.isCompleted = false;
    }

    completeTask() {
        this.isCompleted = true;
        console.log(`Task "${this.title}" has been completed.`);
    }

    printTaskDetails() {
        console.log(`Task: ${this.title}, Status: ${this.isCompleted ? 'Completed' : 'Active'}`);
    }
}

const myTask = new Task("Learn TypeScript");
myTask.completeTask();
myTask.printTaskDetails();

//=================SOLUCION================//
// Interfaz
interface Task {
    getTitle(): string;
    isComplete(): boolean;
    complete(): void;
    printDetails(): void;
}

class TaskData {
    title: string;
    isCompleted: boolean = false;

    complete() {
        this.isCompleted = true;
    }
}

class TaskManager {

    constructor(private data: TaskData) { }

    getTitle() {
        return this.data.title;
    }

    isComplete() {
        return this.data.isCompleted;
    }

    complete() {
        this.data.complete();
    }

    printDetails() {
        console.log(`Task: ${this.data.title}, Status: ${this.data.isCompleted ? 'Completed' : 'Active'}`);
    }

}
class TaskPrinter {

    print(task: Task) {
        task.printDetails();
    }

}
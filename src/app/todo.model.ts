export class Todo {

    constructor(private description: string, private completed: boolean, private dateCreated: Date, private id: number) {}

    isCompleted() {
        return this.completed;
    }

    setCompleted(_completed: boolean) {
        this.completed = _completed;
    }
}
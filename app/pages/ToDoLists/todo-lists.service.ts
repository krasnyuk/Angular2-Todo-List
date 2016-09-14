import { Injectable } from '@angular/core';

class TodoList {
    Id: number;
    Title: string;
    Author: string;
    Date: any;
}

const TODO_LISTS : TodoList[] = [
    { Id: 1, Title: 'Fill TICK ', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 2, Title: 'Learn Angular 2', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 3, Title: 'Learn JS', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 4, Title: 'Read book of D. Flanagan', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 5, Title: 'Visit university', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 6, Title: 'Do something else', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() }
];

@Injectable()
export class TodoListService {
    getToDoLists(): TodoList[] {
        return TODO_LISTS;
    }
}
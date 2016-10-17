import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {TodoListService} from "./todo-lists.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

class TodoList {
    Id: number;
    Title: string;
    Author: string;
    Date: any;
}

@Component({
    selector: 'to-do-lists',
    templateUrl: 'app/pages/ToDoLists/todo-lists.template.html',
    styleUrls: ['app/pages/ToDoLists/todo-lists.css']

})
export class ToDoListsComponent implements OnInit {
    todos: TodoList[] = [];
    addListForm: FormGroup;
    submitted = false;
    active = true;

    constructor(fb: FormBuilder, private toDoListService: TodoListService) {
        this.addListForm = fb.group({
            Title: ["", Validators.required],
            Author: ["", Validators.required],
            Date: ["", Validators.required],
        });

    }


    ngOnInit() {
        //MOCK-SERVICE DATA
        this.todos = this.toDoListService.getToDoLists();
    }
    onClose() {
        console.log("Modal has been closed!");
    }
    onOpen() {
        console.log("Modal has been opened!");
    }
}
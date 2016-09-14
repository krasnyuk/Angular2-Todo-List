import {Component, OnInit} from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {TodoListService} from "./todo-lists.service";


class TodoList {
    Id: number;
    Title: string;
    Author: string;
    Date: any;
}

@Component({
    selector: 'to-do-lists',
    templateUrl: 'app/pages/ToDoLists/todo-lists.template.html',
    style: ``

})
export class ToDoListsComponent implements OnInit {
    todos: TodoList[]=[];

    constructor (private http: Http, private toDoListService: TodoListService) {}

    ngOnInit() {
        //MOCK-SERVICE DATA
        this.todos = this.toDoListService.getToDoLists();
    }

    // getLists() {
    //     this._getJSON('https://localhost:3000/lists.json')
    //         .subscribe(json => this.todos = json.result);
    // }
    //
    // _getJSON(url: string): Observable<any> {
    //     return this.http.get(url)
    //         .map((res: Response) => res.json());
    // }
}
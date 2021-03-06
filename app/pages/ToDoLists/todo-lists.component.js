"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var todo_lists_service_1 = require("./todo-lists.service");
var forms_1 = require('@angular/forms');
var TodoList = (function () {
    function TodoList() {
    }
    return TodoList;
}());
var ToDoListsComponent = (function () {
    function ToDoListsComponent(fb, toDoListService) {
        this.toDoListService = toDoListService;
        this.todos = [];
        this.submitted = false;
        this.active = true;
        this.addListForm = fb.group({
            Title: ["", forms_1.Validators.required],
            Author: ["", forms_1.Validators.required],
            Date: ["", forms_1.Validators.required],
        });
    }
    ToDoListsComponent.prototype.ngOnInit = function () {
        //MOCK-SERVICE DATA
        this.todos = this.toDoListService.getToDoLists();
    };
    ToDoListsComponent.prototype.onClose = function () {
        console.log("Modal has been closed!");
    };
    ToDoListsComponent.prototype.onOpen = function () {
        console.log("Modal has been opened!");
    };
    ToDoListsComponent = __decorate([
        core_1.Component({
            selector: 'to-do-lists',
            templateUrl: 'app/pages/ToDoLists/todo-lists.template.html',
            styleUrls: ['app/pages/ToDoLists/todo-lists.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, todo_lists_service_1.TodoListService])
    ], ToDoListsComponent);
    return ToDoListsComponent;
}());
exports.ToDoListsComponent = ToDoListsComponent;
//# sourceMappingURL=todo-lists.component.js.map
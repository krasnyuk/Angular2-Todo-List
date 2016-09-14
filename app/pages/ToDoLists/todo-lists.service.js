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
var TodoList = (function () {
    function TodoList() {
    }
    return TodoList;
}());
var TODO_LISTS = [
    { Id: 1, Title: 'Fill TICK ', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 2, Title: 'Learn Angular 2', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 3, Title: 'Learn JS', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 4, Title: 'Read book of D. Flanagan', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 5, Title: 'Visit university', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() },
    { Id: 6, Title: 'Do something else', Author: 'A. Krasnyuk', Date: new Date().toLocaleDateString() }
];
var TodoListService = (function () {
    function TodoListService() {
    }
    TodoListService.prototype.getToDoLists = function () {
        return TODO_LISTS;
    };
    TodoListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoListService);
    return TodoListService;
}());
exports.TodoListService = TodoListService;
//# sourceMappingURL=todo-lists.service.js.map
"use strict";
var router_1 = require('@angular/router');
var todo_lists_component_1 = require("./pages/ToDoLists/todo-lists.component");
var about_component_1 = require("./pages/About/about.component");
var history_component_1 = require("./pages/History/history.component");
var appRoutes = [
    {
        //default path
        path: '',
        redirectTo: 'todo-lists',
        pathMatch: 'full'
    }, {
        path: 'todo-lists',
        component: todo_lists_component_1.ToDoListsComponent
    }, {
        path: 'about',
        component: about_component_1.AboutComponent
    }, {
        path: 'history',
        component: history_component_1.HistoryComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
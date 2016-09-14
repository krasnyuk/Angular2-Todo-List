import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders, Component} from '@angular/core';
import {ToDoListsComponent} from "./pages/ToDoLists/todo-lists.component";
import {AboutComponent} from "./pages/About/about.component";
import {HistoryComponent} from "./pages/History/history.component";

const appRoutes : Routes = [
    {
        //default path
        path: '',
        redirectTo : 'todo-lists',
        pathMatch: 'full'
    }, {

        path: 'todo-lists',
        component: ToDoListsComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'history',
        component: HistoryComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
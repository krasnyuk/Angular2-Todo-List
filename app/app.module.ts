import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {NavbarComponent} from "./pages/Navbar/navbar.component";
import {ToDoListsComponent} from "./pages/ToDoLists/todo-lists.component";
import { routing, appRoutingProviders } from './app.routing'
import {AboutComponent} from "./pages/About/about.component";
import {HistoryComponent} from "./pages/History/history.component";
import {HttpModule} from "@angular/http";
import {TodoListService} from "./pages/ToDoLists/todo-lists.service";
import {Modal} from 'fuel-ui/fuel-ui';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    ToDoListsComponent,
    AboutComponent,
    HistoryComponent,
    Modal

  ],

  providers: [
    appRoutingProviders,
    TodoListService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

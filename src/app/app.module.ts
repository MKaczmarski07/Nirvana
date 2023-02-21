import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TodoComponent } from './todo/todo.component';
import { NotebookComponent } from './notebook/notebook.component';
import { FocusModeComponent } from './focus-mode/focus-mode.component';
import { Title } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './todo/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TodoComponent,
    NotebookComponent,
    FocusModeComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

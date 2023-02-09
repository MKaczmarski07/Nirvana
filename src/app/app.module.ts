import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TodoComponent } from './todo/todo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotebookComponent } from './notebook/notebook.component';
import { FocusModeComponent } from './focus-mode/focus-mode.component';
import { Title } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TodoComponent,
    CalendarComponent,
    NotebookComponent,
    FocusModeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

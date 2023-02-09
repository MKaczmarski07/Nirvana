import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { FocusModeComponent } from './focus-mode/focus-mode.component';
import { HomeComponent } from './home/home.component';
import { NotebookComponent } from './notebook/notebook.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'To-do', component: TodoComponent },
  { path: 'Calendar', component: CalendarComponent },
  { path: 'Notebook', component: NotebookComponent },
  { path: 'Focus-mode', component: FocusModeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

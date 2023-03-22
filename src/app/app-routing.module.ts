import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FocusModeComponent } from './focus-mode/focus-mode.component';
import { NotepadComponent } from './notepad/notepad.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: FocusModeComponent, data:{order: 0}},
  { path: 'Notepad', component: NotepadComponent, data: { order: 1 }},
  { path: 'To-do', component: TodoComponent, data:{order: 2}}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

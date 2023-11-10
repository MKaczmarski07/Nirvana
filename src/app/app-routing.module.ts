import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotepadComponent } from './pages/notepad/notepad.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { order: 0 } },
  { path: 'Notepad', component: NotepadComponent, data: { order: 1 } },
  { path: 'To-do', component: TodoComponent, data: { order: 2 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

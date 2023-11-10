import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/home/menu/menu.component';
import { TodoComponent } from './pages/todo/todo.component';
import { NotepadComponent } from './pages/notepad/notepad.component';
import { HomeComponent } from './pages/home/home.component';
import { Title } from '@angular/platform-browser';
import { ItemComponent } from './pages/todo/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NoteMiniatureComponent } from './pages/notepad/note-miniature/note-miniature.component';
import { NewNoteComponent } from './pages/notepad/new-note/new-note.component';
import { NoteComponent } from './pages/notepad/note/note.component';
import { ConfirmDeletionComponent } from './pages/notepad/note/confirm-deletion/confirm-deletion.component';
import { PlayerComponent } from './pages/home/player/player.component';
import { TimerComponent } from './pages/home/timer/timer.component';
import { GetNameComponent } from './pages/get-name/get-name.component';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { ChangeNameComponent } from './pages/home/change-name/change-name.component';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TodoComponent,
    NotepadComponent,
    HomeComponent,
    ItemComponent,
    NoteMiniatureComponent,
    NewNoteComponent,
    NoteComponent,
    ConfirmDeletionComponent,
    PlayerComponent,
    TimerComponent,
    GetNameComponent,
    DashboardComponent,
    ChangeNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}

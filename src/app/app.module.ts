import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TodoComponent } from './todo/todo.component';
import { NotepadComponent } from './notepad/notepad.component';
import { FocusModeComponent } from './focus-mode/focus-mode.component';
import { Title } from '@angular/platform-browser';
import { ItemComponent } from './todo/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NoteMiniatureComponent } from './notepad/note-miniature/note-miniature.component';
import { NewNoteComponent } from './notepad/new-note/new-note.component';
import { NoteComponent } from './notepad/note/note.component';

import {DragDropModule} from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TodoComponent,
    NotepadComponent,
    FocusModeComponent,
    ItemComponent,
    NoteMiniatureComponent,
    NewNoteComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule
   
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { ConfirmDeletionComponent } from './notepad/note/confirm-deletion/confirm-deletion.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { PlayerComponent } from './focus-mode/player/player.component';
import { TimerComponent } from './focus-mode/timer/timer.component';

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
    NoteComponent,
    ConfirmDeletionComponent,
    PlayerComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatChipsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}

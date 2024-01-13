import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {AddNoteComponent} from "./add-note/add-note.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [HeaderComponent, AddNoteComponent],
})
export class AppComponent {}

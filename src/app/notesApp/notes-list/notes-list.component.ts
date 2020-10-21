import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateNotesService } from 'src/app/services/create-notes.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CreateNotes } from '../../interface/create-notes';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notesData: CreateNotes[] = [];
  serachTerm: string;
  input: string;

  constructor(private router: Router,
              private createNotes: CreateNotesService,
              private filterPipe: FilterPipe,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfNotes();
    this.notesData = this.filterPipe.transform(this.notesData, this.serachTerm);
  }

  listOfNotes() {
    this.createNotes.getNotes().subscribe((notes) => {
      this.notesData = notes;
    });
  }

  deleteNote(id: number): void {
    this.createNotes.deleteNote(id).subscribe(() => {
      console.log('note deleted');
    });
    this.listOfNotes();
  }

  onClickAddNotes() {
    this.router.navigate(['/createNotes']);
  }

  onClickEditNote(id: number): void {
    this.router.navigate(['/update', id]);
  }

}

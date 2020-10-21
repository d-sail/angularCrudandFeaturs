import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CreateNotesService } from 'src/app/services/create-notes.service';
import { CreateNotes } from '../../interface/create-notes';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private createNotes: CreateNotesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  notesInput: FormGroup;
  note: CreateNotes;

  ngOnInit(): void {
    this.notesInput = this.fb.group({
      notesTitle: ['', Validators.required],
      notesBody: ['', Validators.required]
    });
    this.activatedRoute.paramMap.subscribe(param => {
      const noteId: number = +param.get('id');
      if (noteId) {
        this.loadNoteDataById(noteId);
      } else {
        this.note = {
          id: null,
          notesTitle: '',
          notesBody: '',
        };
      }
    });
  }

  loadNoteDataById(noteId: number) {
    this.createNotes.getNotesById(noteId).subscribe(note => {
      this.note = note;
      this.notesInput.setValue({
        notesTitle: this.note.notesTitle,
        notesBody: this.note.notesBody
      });
    });
  }

  onSubmit(): void {
    const notes = this.notesInput.value;
    this.note.notesTitle = this.notesInput.value.notesTitle;
    this.note.notesBody = this.notesInput.value.notesBody;
    if (this.note.id) {
      this.createNotes.updateNoteById(this.note).subscribe(() => {});
    } else {
      this.createNotes.createNotes(notes).subscribe(() => { },
        (error) => {
          alert(JSON.stringify(error.message));
        });
    }
    this.router.navigate(['/notes']);
  }

  onCancle() {
    this.notesInput.reset();
    this.router.navigate(['/notes']);
  }
}

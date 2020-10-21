import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateNotes } from '../interface/create-notes';

@Injectable({
  providedIn: 'root'
})
export class CreateNotesService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  createNotes(notes: CreateNotes[]): Observable<CreateNotes[]> {
    return this.http.post<CreateNotes[]> (`${this.baseUrl}createNotes`, notes);
  }
  getNotes(): Observable<CreateNotes[]> {
    return this.http.get<CreateNotes[]> (`${this.baseUrl}createNotes`);
  }
  deleteNote(id: number): Observable<void> {
    return this.http.delete<void> (`${this.baseUrl}createNotes/${id}`);
  }
  getNotesById(id: number): Observable<CreateNotes> {
    return this.http.get<CreateNotes> (`${this.baseUrl}createNotes/${id}`);
  }
  updateNoteById(note: CreateNotes): Observable<CreateNotes> {
    return this.http.put<CreateNotes> (`${this.baseUrl}createNotes/${note.id}`, note);
  }
}

import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { CreateNotes } from '../interface/create-notes';

@Pipe({
  name: 'filter'
})
@Injectable({ providedIn: 'root'})
export class FilterPipe implements PipeTransform {

  transform(otBefilterData: any, serachTerm: any): any {
    if (!otBefilterData || !serachTerm) {
      return otBefilterData;
    }
    return otBefilterData.filter(notes =>
      notes.notesTitle.toLowerCase().indexOf(serachTerm.toLowerCase()) !== -1);
  }
}

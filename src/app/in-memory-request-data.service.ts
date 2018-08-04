import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class InMemoryRequestDataService implements InMemoryDbService {

  createDb() {
    const requests = [
      { hash: 1, documentName: 'document1', proposerName: 'accountName1333', authorName: 'Ion Anton', contentLink: 'cL1', articleDescription: 'aD1'},
      { hash: 2, documentName: 'document2', proposerName: 'accountName2', authorName: 'Mihai Eminescu', contentLink: 'cL2', articleDescription: 'aD2'},
      { hash: 3, documentName: 'document3', proposerName: 'accountName3', authorName: 'Vrabie Ulariu', contentLink: 'cL3', articleDescription: 'aD3'}
    ];
    return { requests };
  }

}

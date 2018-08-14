import { Injectable } from '@angular/core';
import {SubmitentryComponent} from '../submitentry/submitentry.component';
import {Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {University} from '../models/university';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SubmitentryService {
  private uploadUrl = 'http://localhost:8080/update';
  universities: University [] = [];





  constructor() { }
}

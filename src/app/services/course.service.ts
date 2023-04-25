import { Injectable } from '@angular/core';

export enum CourseState {
  IN_PROGRES = 'IN_PROGRESS',
  NEW = 'NEW',
  DONE = 'DONE'
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
}

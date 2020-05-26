import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly searchSubject: BehaviorSubject<any> = new BehaviorSubject<any>("");
  public search$: Observable<any> = this.searchSubject.asObservable();
  constructor() { }


  setSearchValue(searchValue) {
    this.searchSubject.next(searchValue)
  }






}


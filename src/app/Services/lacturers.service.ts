import { ILanguage } from './ILanguage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILecturer } from './ILecturer';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LacturersService {
  private _lecturers:ILecturer[]=[];
  private _languages:ILanguage[]=[];
  private readonly api = "https://localhost:7250/api/";
  private readonly lecturersApi = "Lecturers";
  private readonly languagesApi = "Languages";


  constructor(private _http: HttpClient) {
   }

 
  getLacturers():Observable<ILecturer[]>
  {
    return  this._http.get<ILecturer[]>(this.api+this.lecturersApi);
  }  
    

  getLanguages():Observable<ILanguage[]>
  {
      return  this._http.get<ILanguage[]>(this.api+this.languagesApi);  
  }
}



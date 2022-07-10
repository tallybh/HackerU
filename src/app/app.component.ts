import { ILanguage } from './Services/ILanguage';
import { ILecturer } from './Services/ILecturer';
import { Component,OnInit } from '@angular/core';
import { LacturersService } from './Services/lacturers.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'hacker-U';
  lecturers:ILecturer[]=[];
  filterdLecturers:ILecturer[]=[];
  languages:ILanguage[]=[];
  allLanguage:ILanguage={id:-1,name:"All"};
  displayedColumns = ['id', 'name', 'email'];
  
  constructor(lecturesService: LacturersService)
  {
    lecturesService.getLanguages().subscribe(data=>
      {
        this.languages=data
        this.languages.unshift(this.allLanguage);
      });
    //this.languages = lecturesService.getLanguages();
    
     lecturesService.getLacturers().subscribe(data=>
      {
        this.lecturers = data;
        this.filterdLecturers = this.lecturers;
      });
  
      }
    

  ngOnInit() {
    console.log("component has been initialized!")
  }

  onLanguageChange(event:any) {
    if(event.value ==-1)
    {
      this.filterdLecturers = this.lecturers;
    }
    else
    {
      //this.selectedLanguage = event.value;
      this.filterdLecturers = this.lecturers.filter(d=>d.languages.includes(event.value));
    }
    
  }
}

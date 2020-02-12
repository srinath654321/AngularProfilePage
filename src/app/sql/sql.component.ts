import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCollapsed : boolean = true;


  name : String = "srinath kavur";


  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {

  @Input() her: any=null;

  constructor() { }

  ngOnInit(): void {
  }

}

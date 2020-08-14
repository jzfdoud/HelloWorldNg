import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  @Input() his: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}

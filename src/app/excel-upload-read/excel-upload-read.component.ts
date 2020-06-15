import { Component, OnInit } from '@angular/core';

import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-excel-upload-read',
  templateUrl: './excel-upload-read.component.html',
  styleUrls: ['./excel-upload-read.component.css']
})
export class ExcelUploadReadComponent implements OnInit {
  arrayBuffer: any;
  file: File;
  gridData: any;
  excelData: any;
  gridVisible = false;
  listItems: any;
  pieData: any;

  constructor() { }

  ngOnInit() { }

  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    let fileReader = new FileReader();
      fileReader.onload = (e) => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) 
            arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");

          //read from excel
          var workbook = XLSX.read(bstr, {type:"binary"});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          this.excelData = XLSX.utils.sheet_to_json(worksheet,{raw:true});
          console.log(this.excelData);
          this.gridData = this.excelData;
          this.gridVisible = true;
          this.listItems = Object.keys(this.gridData[0]);
      };
      fileReader.readAsArrayBuffer(this.file);
      
    }

    hideKendoGrid() {
      this.gridVisible = !this.gridVisible;
    }

    groupDataBy(data: any, groupByProperty: string): any{
      let groupedData: any[];
      if(!data) {
        return null;
      }
      const map = new Map();
      data.forEach((item) => {
          const key = item[groupByProperty];
          if (!map.has(key)) {
              map.set(key, [item]);
          } else {
              map.get(key).push(item);
          }
      });
      let groups = Array.from(map, x => this.addGroup(x[0], x[1]) );
      return groups;
  }

  addGroup(key, value) {
    return { "key": key, "value": value };
  }
  
  valueChange(event){
    this.pieData = this.groupDataBy(this.gridData, event);
    console.log(this.pieData);
  }
}

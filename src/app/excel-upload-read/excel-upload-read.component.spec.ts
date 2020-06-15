import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelUploadReadComponent } from './excel-upload-read.component';

describe('ExcelUploadReadComponent', () => {
  let component: ExcelUploadReadComponent;
  let fixture: ComponentFixture<ExcelUploadReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelUploadReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelUploadReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

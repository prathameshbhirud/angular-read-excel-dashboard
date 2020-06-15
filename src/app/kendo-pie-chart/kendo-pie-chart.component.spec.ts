import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoPieChartComponent } from './kendo-pie-chart.component';

describe('KendoPieChartComponent', () => {
  let component: KendoPieChartComponent;
  let fixture: ComponentFixture<KendoPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

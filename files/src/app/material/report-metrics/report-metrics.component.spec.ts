import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMetricsComponent } from './report-metrics.component';

describe('ReportMetricsComponent', () => {
  let component: ReportMetricsComponent;
  let fixture: ComponentFixture<ReportMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

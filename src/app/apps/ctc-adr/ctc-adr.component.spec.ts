import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtcAdrComponent } from './ctc-adr.component';

describe('CtcAdrComponent', () => {
  let component: CtcAdrComponent;
  let fixture: ComponentFixture<CtcAdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtcAdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtcAdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

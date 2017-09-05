import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkliftDriverComponent } from './forklift-driver.component';

describe('ForkliftDriverComponent', () => {
  let component: ForkliftDriverComponent;
  let fixture: ComponentFixture<ForkliftDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkliftDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkliftDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

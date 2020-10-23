import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasEstructuralesComponent } from './directivas-estructurales.component';

describe('DirectivasEstructuralesComponent', () => {
  let component: DirectivasEstructuralesComponent;
  let fixture: ComponentFixture<DirectivasEstructuralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivasEstructuralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivasEstructuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

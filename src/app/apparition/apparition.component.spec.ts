import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparitionComponent } from './apparition.component';

describe('ApparitionComponent', () => {
  let component: ApparitionComponent;
  let fixture: ComponentFixture<ApparitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

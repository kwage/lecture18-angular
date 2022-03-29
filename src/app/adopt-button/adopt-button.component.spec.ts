import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptButtonComponent } from './adopt-button.component';

describe('AdoptButtonComponent', () => {
  let component: AdoptButtonComponent;
  let fixture: ComponentFixture<AdoptButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdWindowComponent } from './ad-window.component';

describe('AdWindowComponent', () => {
  let component: AdWindowComponent;
  let fixture: ComponentFixture<AdWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

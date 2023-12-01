import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetdiaComponent } from './netdia.component';

describe('NetdiaComponent', () => {
  let component: NetdiaComponent;
  let fixture: ComponentFixture<NetdiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetdiaComponent]
    });
    fixture = TestBed.createComponent(NetdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

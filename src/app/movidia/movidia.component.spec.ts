import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovidiaComponent } from './movidia.component';

describe('MovidiaComponent', () => {
  let component: MovidiaComponent;
  let fixture: ComponentFixture<MovidiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovidiaComponent]
    });
    fixture = TestBed.createComponent(MovidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

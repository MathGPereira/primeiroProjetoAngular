import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassosComponent } from './passos.component';

describe('PassosComponent', () => {
  let component: PassosComponent;
  let fixture: ComponentFixture<PassosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassosComponent]
    });
    fixture = TestBed.createComponent(PassosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

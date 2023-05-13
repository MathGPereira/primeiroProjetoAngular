import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoInicialComponent } from './secao-inicial.component';

describe('SecaoInicialComponent', () => {
  let component: SecaoInicialComponent;
  let fixture: ComponentFixture<SecaoInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoInicialComponent]
    });
    fixture = TestBed.createComponent(SecaoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

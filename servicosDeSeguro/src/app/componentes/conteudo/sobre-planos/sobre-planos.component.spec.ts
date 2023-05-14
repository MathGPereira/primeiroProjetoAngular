import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrePlanosComponent } from './sobre-planos.component';

describe('SobrePlanosComponent', () => {
  let component: SobrePlanosComponent;
  let fixture: ComponentFixture<SobrePlanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobrePlanosComponent]
    });
    fixture = TestBed.createComponent(SobrePlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

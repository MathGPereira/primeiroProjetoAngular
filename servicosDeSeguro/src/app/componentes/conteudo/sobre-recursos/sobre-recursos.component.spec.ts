import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreRecursosComponent } from './sobre-recursos.component';

describe('SobreRecursosComponent', () => {
  let component: SobreRecursosComponent;
  let fixture: ComponentFixture<SobreRecursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreRecursosComponent]
    });
    fixture = TestBed.createComponent(SobreRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

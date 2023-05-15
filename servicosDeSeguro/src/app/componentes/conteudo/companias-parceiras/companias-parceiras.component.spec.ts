import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniasParceirasComponent } from './companias-parceiras.component';

describe('CompaniasParceirasComponent', () => {
  let component: CompaniasParceirasComponent;
  let fixture: ComponentFixture<CompaniasParceirasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniasParceirasComponent]
    });
    fixture = TestBed.createComponent(CompaniasParceirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

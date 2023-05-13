import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreServicosComponent } from './sobre-servicos.component';

describe('SobreServicosComponent', () => {
  let component: SobreServicosComponent;
  let fixture: ComponentFixture<SobreServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreServicosComponent]
    });
    fixture = TestBed.createComponent(SobreServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

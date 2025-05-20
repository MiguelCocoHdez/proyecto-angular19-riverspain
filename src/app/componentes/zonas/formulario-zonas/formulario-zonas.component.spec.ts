import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioZonasComponent } from './formulario-zonas.component';

describe('FormularioZonasComponent', () => {
  let component: FormularioZonasComponent;
  let fixture: ComponentFixture<FormularioZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioZonasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

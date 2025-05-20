import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVoluntarioComponent } from './formulario-voluntario.component';

describe('FormularioVoluntarioComponent', () => {
  let component: FormularioVoluntarioComponent;
  let fixture: ComponentFixture<FormularioVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioVoluntarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExplorarPecesComponent } from './pagina-explorar-peces.component';

describe('PaginaExplorarPecesComponent', () => {
  let component: PaginaExplorarPecesComponent;
  let fixture: ComponentFixture<PaginaExplorarPecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaExplorarPecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaExplorarPecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

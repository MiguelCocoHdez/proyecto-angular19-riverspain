import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaZonasComponent } from './pagina-zonas.component';

describe('PaginaZonasComponent', () => {
  let component: PaginaZonasComponent;
  let fixture: ComponentFixture<PaginaZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaZonasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

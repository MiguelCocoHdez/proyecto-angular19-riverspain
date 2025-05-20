import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPecesComponent } from './pagina-peces.component';

describe('PaginaPecesComponent', () => {
  let component: PaginaPecesComponent;
  let fixture: ComponentFixture<PaginaPecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

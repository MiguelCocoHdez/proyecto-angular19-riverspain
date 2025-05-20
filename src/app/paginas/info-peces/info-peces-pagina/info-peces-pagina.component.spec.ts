import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPecesPaginaComponent } from './info-peces-pagina.component';

describe('InfoPecesPaginaComponent', () => {
  let component: InfoPecesPaginaComponent;
  let fixture: ComponentFixture<InfoPecesPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPecesPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPecesPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

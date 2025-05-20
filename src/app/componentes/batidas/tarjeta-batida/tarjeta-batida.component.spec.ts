import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBatidaComponent } from './tarjeta-batida.component';

describe('TarjetaBatidaComponent', () => {
  let component: TarjetaBatidaComponent;
  let fixture: ComponentFixture<TarjetaBatidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaBatidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaBatidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

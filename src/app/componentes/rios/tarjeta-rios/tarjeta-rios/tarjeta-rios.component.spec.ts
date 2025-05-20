import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRiosComponent } from './tarjeta-rios.component';

describe('TarjetaRiosComponent', () => {
  let component: TarjetaRiosComponent;
  let fixture: ComponentFixture<TarjetaRiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaRiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaRiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

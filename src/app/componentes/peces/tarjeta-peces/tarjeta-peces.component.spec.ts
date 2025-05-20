import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPecesComponent } from './tarjeta-peces.component';

describe('TarjetaPecesComponent', () => {
  let component: TarjetaPecesComponent;
  let fixture: ComponentFixture<TarjetaPecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

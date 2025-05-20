import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaZonasVoluntarioComponent } from './mapa-zonas-voluntario.component';

describe('MapaZonasVoluntarioComponent', () => {
  let component: MapaZonasVoluntarioComponent;
  let fixture: ComponentFixture<MapaZonasVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaZonasVoluntarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaZonasVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

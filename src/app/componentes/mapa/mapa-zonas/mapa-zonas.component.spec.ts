import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaZonasComponent } from './mapa-zonas.component';

describe('MapaZonasComponent', () => {
  let component: MapaZonasComponent;
  let fixture: ComponentFixture<MapaZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaZonasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

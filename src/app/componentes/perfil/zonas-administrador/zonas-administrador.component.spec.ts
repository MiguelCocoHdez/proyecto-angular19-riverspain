import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasAdministradorComponent } from './zonas-administrador.component';

describe('ZonasAdministradorComponent', () => {
  let component: ZonasAdministradorComponent;
  let fixture: ComponentFixture<ZonasAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonasAdministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

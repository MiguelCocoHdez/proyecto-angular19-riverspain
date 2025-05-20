import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasVoluntarioComponent } from './zonas-voluntario.component';

describe('ZonasVoluntarioComponent', () => {
  let component: ZonasVoluntarioComponent;
  let fixture: ComponentFixture<ZonasVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonasVoluntarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

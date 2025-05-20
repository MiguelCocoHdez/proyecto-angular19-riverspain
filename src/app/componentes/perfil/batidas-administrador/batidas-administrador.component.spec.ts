import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatidasAdministradorComponent } from './batidas-administrador.component';

describe('BatidasAdministradorComponent', () => {
  let component: BatidasAdministradorComponent;
  let fixture: ComponentFixture<BatidasAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatidasAdministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatidasAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

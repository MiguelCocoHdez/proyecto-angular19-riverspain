import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustodiarZonaComponent } from './custodiar-zona.component';

describe('CustodiarZonaComponent', () => {
  let component: CustodiarZonaComponent;
  let fixture: ComponentFixture<CustodiarZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustodiarZonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustodiarZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

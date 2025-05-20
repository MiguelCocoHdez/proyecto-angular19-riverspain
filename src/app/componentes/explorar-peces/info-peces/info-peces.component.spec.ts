import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPecesComponent } from './info-peces.component';

describe('InfoPecesComponent', () => {
  let component: InfoPecesComponent;
  let fixture: ComponentFixture<InfoPecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

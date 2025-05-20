import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatidasVoluntarioComponent } from './batidas-voluntario.component';

describe('BatidasVoluntarioComponent', () => {
  let component: BatidasVoluntarioComponent;
  let fixture: ComponentFixture<BatidasVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatidasVoluntarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatidasVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

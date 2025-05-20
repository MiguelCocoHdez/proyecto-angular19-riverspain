import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBatidasComponent } from './pagina-batidas.component';

describe('PaginaBatidasComponent', () => {
  let component: PaginaBatidasComponent;
  let fixture: ComponentFixture<PaginaBatidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaBatidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaBatidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

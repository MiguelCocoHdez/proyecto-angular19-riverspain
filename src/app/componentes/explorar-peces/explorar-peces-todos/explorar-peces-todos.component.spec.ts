import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarPecesTodosComponent } from './explorar-peces-todos.component';

describe('ExplorarPecesTodosComponent', () => {
  let component: ExplorarPecesTodosComponent;
  let fixture: ComponentFixture<ExplorarPecesTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorarPecesTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarPecesTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

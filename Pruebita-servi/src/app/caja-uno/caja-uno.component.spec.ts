import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaUnoComponent } from './caja-uno.component';

describe('CajaUnoComponent', () => {
  let component: CajaUnoComponent;
  let fixture: ComponentFixture<CajaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

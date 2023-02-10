import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelCuacaComponent } from './tabel-cuaca.component';

describe('TabelCuacaComponent', () => {
  let component: TabelCuacaComponent;
  let fixture: ComponentFixture<TabelCuacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelCuacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelCuacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

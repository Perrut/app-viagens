import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadeNaoImplementadaComponent } from './funcionalidade-nao-implementada.component';

describe('FuncionalidadeNaoImplementadaComponent', () => {
  let component: FuncionalidadeNaoImplementadaComponent;
  let fixture: ComponentFixture<FuncionalidadeNaoImplementadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionalidadeNaoImplementadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionalidadeNaoImplementadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

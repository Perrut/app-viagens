import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaClientesComponent } from './busca-clientes.component';

describe('BuscaClientesComponent', () => {
  let component: BuscaClientesComponent;
  let fixture: ComponentFixture<BuscaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCreditoPageComponent } from './tarjeta-credito-page.component';

describe('TarjetaCreditoPageComponent', () => {
  let component: TarjetaCreditoPageComponent;
  let fixture: ComponentFixture<TarjetaCreditoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCreditoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCreditoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCrditoPageComponent } from './tarjeta-crdito-page.component';

describe('TarjetaCrditoPageComponent', () => {
  let component: TarjetaCrditoPageComponent;
  let fixture: ComponentFixture<TarjetaCrditoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCrditoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCrditoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

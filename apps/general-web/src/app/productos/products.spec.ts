import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Products } from './products';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
       providers: [provideZonelessChangeDetection()], // Add this line
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

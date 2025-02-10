import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant33Component } from './composant-3-3.component';

describe('Composant33Component', () => {
  let component: Composant33Component;
  let fixture: ComponentFixture<Composant33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

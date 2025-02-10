import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant32Component } from './composant-3-2.component';

describe('Composant32Component', () => {
  let component: Composant32Component;
  let fixture: ComponentFixture<Composant32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant32Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

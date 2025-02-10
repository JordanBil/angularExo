import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant31Component } from './composant-3-1.component';

describe('Composant31Component', () => {
  let component: Composant31Component;
  let fixture: ComponentFixture<Composant31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

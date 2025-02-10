import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant22Component } from './composant-2-2.component';

describe('Composant22Component', () => {
  let component: Composant22Component;
  let fixture: ComponentFixture<Composant22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

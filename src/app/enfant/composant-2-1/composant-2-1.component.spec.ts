import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant21Component } from './composant-2-1.component';

describe('Composant21Component', () => {
  let component: Composant21Component;
  let fixture: ComponentFixture<Composant21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

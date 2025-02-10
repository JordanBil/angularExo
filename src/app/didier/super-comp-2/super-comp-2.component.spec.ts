import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperComp2Component } from './super-comp-2.component';

describe('SuperComp2Component', () => {
  let component: SuperComp2Component;
  let fixture: ComponentFixture<SuperComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperComp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballListComponent } from './dragonball-list.component';

describe('DragonballListComponent', () => {
  let component: DragonballListComponent;
  let fixture: ComponentFixture<DragonballListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

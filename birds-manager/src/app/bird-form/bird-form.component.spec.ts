import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdFormComponent } from './bird-form.component';

describe('BirdFormComponent', () => {
  let component: BirdFormComponent;
  let fixture: ComponentFixture<BirdFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirdFormComponent]
    });
    fixture = TestBed.createComponent(BirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBirdWeightComponent } from './manage-bird-weight.component';

describe('ManageBirdWeightComponent', () => {
  let component: ManageBirdWeightComponent;
  let fixture: ComponentFixture<ManageBirdWeightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBirdWeightComponent]
    });
    fixture = TestBed.createComponent(ManageBirdWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

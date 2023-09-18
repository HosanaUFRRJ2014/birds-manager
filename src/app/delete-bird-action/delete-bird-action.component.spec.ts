import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBirdActionComponent } from './delete-bird-action.component';

describe('DeleteBirdActionComponent', () => {
  let component: DeleteBirdActionComponent;
  let fixture: ComponentFixture<DeleteBirdActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBirdActionComponent]
    });
    fixture = TestBed.createComponent(DeleteBirdActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

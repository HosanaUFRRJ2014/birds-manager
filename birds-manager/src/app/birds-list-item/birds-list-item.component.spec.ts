import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsListItemComponent } from './birds-list-item.component';

describe('BirdsListItemComponent', () => {
  let component: BirdsListItemComponent;
  let fixture: ComponentFixture<BirdsListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirdsListItemComponent]
    });
    fixture = TestBed.createComponent(BirdsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

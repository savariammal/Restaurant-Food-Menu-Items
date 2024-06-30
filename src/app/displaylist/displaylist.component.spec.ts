import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylistComponent } from './displaylist.component';

describe('DisplaylistComponent', () => {
  let component: DisplaylistComponent;
  let fixture: ComponentFixture<DisplaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaylistComponent]
    });
    fixture = TestBed.createComponent(DisplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

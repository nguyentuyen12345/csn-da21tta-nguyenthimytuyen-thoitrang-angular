import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhukiennuComponent } from './phukiennu.component';

describe('PhukiennuComponent', () => {
  let component: PhukiennuComponent;
  let fixture: ComponentFixture<PhukiennuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhukiennuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhukiennuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

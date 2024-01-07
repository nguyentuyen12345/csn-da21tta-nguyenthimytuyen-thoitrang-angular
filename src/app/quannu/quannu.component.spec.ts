import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuannuComponent } from './quannu.component';

describe('QuannuComponent', () => {
  let component: QuannuComponent;
  let fixture: ComponentFixture<QuannuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuannuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuannuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

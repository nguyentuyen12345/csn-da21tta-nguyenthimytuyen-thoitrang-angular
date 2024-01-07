import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoitrangnamComponent } from './thoitrangnam.component';

describe('ThoitrangnamComponent', () => {
  let component: ThoitrangnamComponent;
  let fixture: ComponentFixture<ThoitrangnamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoitrangnamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoitrangnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

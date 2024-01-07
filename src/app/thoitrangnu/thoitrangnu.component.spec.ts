import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoitrangnuComponent } from './thoitrangnu.component';

describe('ThoitrangnuComponent', () => {
  let component: ThoitrangnuComponent;
  let fixture: ComponentFixture<ThoitrangnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoitrangnuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoitrangnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

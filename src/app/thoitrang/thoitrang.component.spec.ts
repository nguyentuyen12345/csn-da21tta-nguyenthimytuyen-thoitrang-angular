import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoitrangComponent } from './thoitrang.component';

describe('ThoitrangComponent', () => {
  let component: ThoitrangComponent;
  let fixture: ComponentFixture<ThoitrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoitrangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoitrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

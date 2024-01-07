import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AosomiComponent } from './aosomi.component';

describe('AosomiComponent', () => {
  let component: AosomiComponent;
  let fixture: ComponentFixture<AosomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AosomiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AosomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetdonuComponent } from './setdonu.component';

describe('SetdonuComponent', () => {
  let component: SetdonuComponent;
  let fixture: ComponentFixture<SetdonuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetdonuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetdonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

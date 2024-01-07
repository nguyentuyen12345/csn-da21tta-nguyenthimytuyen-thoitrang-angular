import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AothunComponent } from './aothun.component';

describe('AothunComponent', () => {
  let component: AothunComponent;
  let fixture: ComponentFixture<AothunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AothunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AothunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

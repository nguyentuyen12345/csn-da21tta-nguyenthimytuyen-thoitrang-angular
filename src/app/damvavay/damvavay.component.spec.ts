import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamvavayComponent } from './damvavay.component';

describe('DamvavayComponent', () => {
  let component: DamvavayComponent;
  let fixture: ComponentFixture<DamvavayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamvavayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamvavayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

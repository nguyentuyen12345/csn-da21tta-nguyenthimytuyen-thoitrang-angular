import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphammoiComponent } from './sanphammoi.component';

describe('SanphammoiComponent', () => {
  let component: SanphammoiComponent;
  let fixture: ComponentFixture<SanphammoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphammoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanphammoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

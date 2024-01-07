import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuannamComponent } from './quannam.component';

describe('QuannamComponent', () => {
  let component: QuannamComponent;
  let fixture: ComponentFixture<QuannamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuannamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuannamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

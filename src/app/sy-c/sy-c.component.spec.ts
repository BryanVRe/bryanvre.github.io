import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyCComponent } from './sy-c.component';

describe('SyCComponent', () => {
  let component: SyCComponent;
  let fixture: ComponentFixture<SyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

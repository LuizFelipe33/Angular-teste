import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponemtComponent } from './first-componemt.component';

describe('FirstComponemtComponent', () => {
  let component: FirstComponemtComponent;
  let fixture: ComponentFixture<FirstComponemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponemtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

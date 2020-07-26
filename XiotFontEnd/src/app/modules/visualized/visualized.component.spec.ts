import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizedComponent } from './visualized.component';

describe('VisualizedComponent', () => {
  let component: VisualizedComponent;
  let fixture: ComponentFixture<VisualizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

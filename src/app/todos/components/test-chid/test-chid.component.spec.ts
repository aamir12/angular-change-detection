import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChidComponent } from './test-chid.component';

describe('TestChidComponent', () => {
  let component: TestChidComponent;
  let fixture: ComponentFixture<TestChidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestChidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

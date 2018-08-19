import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescriptionApiComponent } from './book-description-api.component';

describe('BookDescriptionApiComponent', () => {
  let component: BookDescriptionApiComponent;
  let fixture: ComponentFixture<BookDescriptionApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDescriptionApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDescriptionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListAPIComponent } from './book-list-api.component';

describe('BookListAPIComponent', () => {
  let component: BookListAPIComponent;
  let fixture: ComponentFixture<BookListAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

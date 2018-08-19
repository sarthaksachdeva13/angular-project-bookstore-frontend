import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book.service';

@Component({
    selector: 'app-book-description-api',
    templateUrl: './book-description-api.component.html',
    styleUrls: ['./book-description-api.component.css']
})
export class BookDescriptionApiComponent implements OnInit {

    book = {};
    bookLoaded = false;

    constructor(private router: ActivatedRoute,
                private bookService: BookService) {
    }

    ngOnInit() {
        this.router.params.subscribe(params =>
            this.bookService
                .searchBookAPI(params['bookId'])
                .then(book => {
                    this.book = book;
                    console.log(book);
                    this.bookLoaded = true;
                }));
    }

}

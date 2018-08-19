import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {AppConst} from '../../constants/app-const';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
    selector: 'app-book-list-api',
    templateUrl: './book-list-api.component.html',
    styleUrls: ['./book-list-api.component.css']
})
export class BookListAPIComponent implements OnInit {
    results = {
        items: []
    }

    constructor(
        private bookService: BookService,
        private router: Router,
        private http: Http,
        private route: ActivatedRoute
    ) {
    }

    description = id => {
        this.router.navigate(['book/' + id]);
    }


    ngOnInit() {
        this.route.params.subscribe(params =>
            this.bookService.searchBookAPI(params['searchQ'])
                .then(results => this.results = results))
    }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss',
})
export class BookDetail {
  private activatedRoute =
  inject(ActivatedRoute);
  id = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit() {

  }
}

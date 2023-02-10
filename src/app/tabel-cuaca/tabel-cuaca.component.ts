import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tabel-cuaca',
  templateUrl: './tabel-cuaca.component.html',
  styleUrls: ['./tabel-cuaca.component.scss']
})
export class TabelCuacaComponent implements OnInit {
  posts: any;

  constructor(
    private http: HttpClient
  ) { }

    ngOnInit() {
      this.http.get('https://api.tvmaze.com/shows/1/episodes')
        .subscribe(response => {
          this.posts = response;
        });
    }
}

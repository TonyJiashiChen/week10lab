import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-actortomovie',
  templateUrl: './actortomovie.component.html',
  styleUrls: ['./actortomovie.component.css']
})
export class ActortomovieComponent implements OnInit {

  actorsDB: any[] = [];
  selectedActor = null;
  moviesDB: any[] = [];
  selectedMovie = null;
  movieId: string = "";

  constructor(private dbService: DatabaseService, private router: Router) { 

    
  }

  ngOnInit(): void {
    console.log("Hi From ListActors ngIOnit");
    
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    })
    console.log("Hi From ListMovies ngIOnit");
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  selectActor(actor) {
    this.selectedActor = actor;
  }
  selectMovie(movie) {
    this.selectedMovie = movie;
  }
  onGetMovies() {
    console.log("From on GetActors");
    return this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }
 

  onUpdateMovie() {
    let obj = { actors: this.selectedActor };
    this.dbService.updateMovie(this.selectedMovie._id, obj).subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    });
  }

  
  


  

  

}

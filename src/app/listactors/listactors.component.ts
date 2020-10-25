import { Component, OnInit } from "@angular/core";
import { ɵTestingCompilerFactory } from '@angular/core/testing';
import { DatabaseService } from "../database.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
@Component({
  selector: "app-listactors",
  templateUrl: "./listactors.component.html",
  styleUrls: ["./listactors.component.css"],
})
export class ListactorsComponent implements OnInit {
  

  fruits = ['Apple', 'Orange', 'Banana']; 
  actorsDB: any[] = [];

  constructor(private dbService: DatabaseService) { 

    
  }

  ngOnInit(): void {
    console.log("Hi From ListActors ngIOnit");
    this.getActors();
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    })
  }

  
  


  getActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    })

  }
}

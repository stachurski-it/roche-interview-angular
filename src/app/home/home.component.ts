import { Component, OnInit } from '@angular/core';
import { BrewerApiService } from '../brewer-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchByNameText = ''
  searchByStateText = ''
  breweries = []
  states = []

  constructor(private brewerApiService: BrewerApiService) { }

  ngOnInit(): void {
    this.brewerApiService.getBreweries().subscribe((data: any[]) => {
      console.log(data);
      this.breweries = data;
    })

    this.brewerApiService.getStates().subscribe((data: any[]) => {
      console.log(data);
      this.states = data;
    })
  }

  reset() {
    this.searchByNameText=''
    this.searchByStateText = ''
  }
}
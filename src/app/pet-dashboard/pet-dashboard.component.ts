import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-dashboard',
  templateUrl: './pet-dashboard.component.html',
  styleUrls: ['./pet-dashboard.component.css']
})
export class PetDashboardComponent implements OnInit {

  showDogs: boolean;
  dogs: string[];
  cats: string[];

  constructor() { 
    this.showDogs = true;
    this.dogs = ["Stark", "Bella", "Zeus", "Zoey", "Toby"];
    this.cats = ["Winston", "Stella", "Dexter", "Giffy"];
  }

  ngOnInit() {
  }

  addPet(myPetName) {
    if (this.showDogs === true) {
      this.dogs.push(myPetName);
    } else {
      this.cats.push(myPetName);
    }
    
    // console.log(myPetName);
  }

  togglePetType(showDogs) {
    this.showDogs = showDogs;
  }

}

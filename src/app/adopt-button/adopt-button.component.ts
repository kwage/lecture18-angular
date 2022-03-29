import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopt-button',
  templateUrl: './adopt-button.component.html',
  styleUrls: ['./adopt-button.component.css']
})
export class AdoptButtonComponent implements OnInit {

  @Input() petName: string;
  isAdopted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleIsAdopted() {
    this.isAdopted = !this.isAdopted;
  }

}

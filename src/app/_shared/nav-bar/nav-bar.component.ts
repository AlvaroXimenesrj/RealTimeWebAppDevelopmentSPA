import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  pathImage = 'assets/background1.jpg'
  constructor() {
    //assets/background1.jpg
  }

  ngOnInit(): void {
  }

}

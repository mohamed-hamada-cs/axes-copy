import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  mediam: boolean = false;
  IconDropList = 'assets/Pics/down-chevron.png';
  IconMenu = 'assets/Pics/menu.png';
  ngOnInit(): void {}
  DropDown() {
    this.mediam = !this.mediam;
    if (this.IconDropList == 'assets/Pics/down-chevron.png')
      this.IconDropList = 'assets/Pics/up-chevron.png';
    else this.IconDropList = 'assets/Pics/down-chevron.png';
  }
  Menu() {
    if (this.IconMenu == 'assets/Pics/menu.png')
      this.IconMenu = 'assets/Pics/close.png';
    else this.IconMenu = 'assets/Pics/menu.png';
    var list = document.getElementById('ItemsList');
    if (list?.getAttribute('class') == 'Items')
      list?.setAttribute('class', 'Items Items--active');
    else list?.setAttribute('class', 'Items');
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  @Input() Object: any;
  Title: String = '';
  Describtion: String = '';
  Img: String = '';
  sec_Background: String = '';
  But_background: String = '';
  Dirc: boolean = false;
  Flag: boolean = false;
  Lang: String = '';
  Cat: String = '';
  ButText: String = 'Take a Look at our projects';
  f: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (this.Object != undefined) {
      this.Title = this.Object.Title;
      this.Describtion = this.Object.Describtion;
      this.Img = this.Object.Img;
      this.sec_Background = this.Object.sec_Background;
      this.But_background = this.Object.But_background;
      this.Lang = this.Object.Lg;
      this.Dirc = this.Object.Dirc;
      this.Cat = this.Object.Cat;
    }
    var H = document.getElementById('H');
    if (this.Title != '') this.Flag = true;
    if (this.Lang == 'ar') {
      this.ButText = 'الق نظرة على مشاريعنا';
    } else {
      this.ButText = 'Take a Look at our projects';
    }
    if (this.Lang == 'ar' && this.Dirc == true) {
      this.f = true;
    }
  }
}

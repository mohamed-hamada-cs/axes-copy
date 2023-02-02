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

  constructor() {}

  ngOnInit(): void {
    this.Title = this.Object.Title;
    this.Describtion = this.Object.Describtion;
    this.Img = this.Object.Img;
    this.sec_Background = this.Object.sec_Background;
    this.But_background = this.Object.But_background;
    this.Dirc = this.Object.Dirc;
    if (this.Title != '') this.Flag = true;
  }
}

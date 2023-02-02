import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  Objects = [
    {
      Title: 'Marketing',
      Describtion: `It's not just design and advertising, there's a Lot of stuff behind it.
      You should build your business on integrated marketing plans,
      all of which contribute to enhancing the visibility of your brand
      with a noticeable increase in your sales, and Axes will offer you
      that at the best prices in the market.`,
      Img: 'assets/Pics/Services1.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Dirc: true,
    },
    {
      Title: 'Branding',
      Describtion: `If someone said to you: Do you Leave your identity, of course
      you will refuse ! 
      So do not accept your brand to be without a real identity.
      Axes will present it to you in a special way.`,
      Img: 'assets/Pics/Services2.png',
      sec_Background: 'blueSec',
      But_background: 'blackBut',
      Dirc: false,
    },
    {
      Title: 'Video Production',
      Describtion: `Many times you want to create a high quality and pro-
      fessional videos in order to promote your business as
      an entrepreneur or to engage your audience if you are
      a content creator, and with Axes we will provide you
      with the best equipment you need with a team with
      great experience in the field, to end up with the best
      video Possible form and quality.`,
      Img: 'assets/Pics/Services3.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Dirc: true,
    },
    {
      Title: 'Video Production',
      Describtion: `What is the best time to take a photo?
      Yes, the best time is when Axes cameras capture it, because
      we offer you a distinctive set of equipment that helps to
      bring out the image in its full splendor and the best quality,
      and through which it attracts your audience.`,
      Img: 'assets/Pics/Services4.png',
      sec_Background: 'blackSec',
      But_background: 'blueBut',
      Dirc: false,
    },
    {
      Title: 'Websites',
      Describtion: `If I asked you what you think about the look of your
      company, what do you think?
      Yes, in the style , the Scenery and other things, This is
      exactly the point that I want to reach. We do not give a
      free template .. We create.`,
      Img: 'assets/Pics/Services5.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Dirc: true,
    },
    {
      Title: 'Mobile Applications',
      Describtion: `It is the field that you must have thought about or will be
      thinking about in the very near future.. Simply why not the
      next useful application is your idea?`,
      Img: 'assets/Pics/Services6.png',
      sec_Background: 'blueSec',
      But_background: 'blackBut',
      Dirc: false,
    },
    ,
  ];
  constructor() {}

  ngOnInit(): void {}
}

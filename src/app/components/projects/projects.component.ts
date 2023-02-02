import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  public Cat: string | undefined;
  popup = false; //false
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.Cat = this.route.snapshot.paramMap.get('Cat')!;
  }
  OpenPopUp() {
    this.popup = true;
    document.body.style.overflow = 'hidden';
    /* var viewport_width = window.innerWidth;
    if (viewport_width <= 768) this.page = false; */
  }
  ClosePopUp() {
    this.popup = false;
    document.body.style.overflow = 'visible';
    /* this.page = true; */
  }

  Pics = [
    'assets/Pics/Behance/1.jpg',
    'assets/Pics/Behance/2.jpg',
    'assets/Pics/Behance/3.jpg',
    'assets/Pics/Behance/4.jpg',
  ];
  Projects = [
    {
      Img: 'assets/Pics/food.png',
      Title: 'Project Name',
      Discrib: 'Project discribtion it is information about project',
    },
    {
      Img: 'assets/Pics/food.png',
      Title: 'Project Name',
      Discrib: 'Project discribtion it is information about project',
    },
    {
      Img: 'assets/Pics/food.png',
      Title: 'Project Name',
      Discrib: 'Project discribtion it is information about project',
    },
    {
      Img: 'assets/Pics/food.png',
      Title: 'Project Name',
      Discrib: 'Project discribtion it is information about project',
    },
    {
      Img: 'assets/Pics/food.png',
      Title: 'Project Name',
      Discrib: 'Project discribtion it is information about project',
    },
    {
      Img: 'assets/Pics/food.png',
      Title: 'Project Name',
      Discrib: 'Project discribtion it is information about project',
    },
    {
      Img: 'assets/Pics/food.png',
      Title: 'Project Name',
      Discrib: 'Project discribtion it is information about project',
    },
  ];
  /*  richtext='# Title\n\n## subtitle 1\n\nflkjlfdjklgjlkjldfj\n\n\n## subtitle 2\n\n\nabc just **bold**\nfont _italic_\n\n\n```\n\ncout << \"Hello World\" ;\n\n# ```';
  returnHtmlFromRichText(richText: Document | null | undefined) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  } */
}

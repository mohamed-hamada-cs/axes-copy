import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';
import { HttpClient } from '@angular/common/http';
import { marked } from 'marked';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  Cat = '';
  thumbSrc = '';
  TestProjects: any;
  data: any;
  html = '';
  filteredData: any = [];
  Id: number | undefined;
  OneProject: any;
  empty = false;
  popup = false; //false
  Pics: any;
  Vids: any = [];
  NoPro = true;
  safeVids: SafeResourceUrl[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
    /*  this.html = marked(
      '# This is a Markdown heading\n\nAnd this is a paragraph.'
    ); */
    /* this.data?.forEach((element: any) => {
      element.attributes.description = marked(element.attributes.description);
    }); */
  }
  ngOnInit(): void {
    this.Cat = this.route.snapshot.paramMap.get('Cat')!;
    this.getData(this.Cat);
  }
  OpenPopUp(id: number) {
    this.popup = true;
    document.body.style.overflow = 'hidden';
    this.Id = id;
    this.getProject(this.Id);
  }
  ClosePopUp() {
    this.popup = false;
    document.body.style.overflow = 'visible';
  }

  /*   Pics = [
    'assets/Pics/Behance/1.jpg',
    'assets/Pics/Behance/2.jpg',
    'assets/Pics/Behance/3.jpg',
    'assets/Pics/Behance/4.jpg',
  ]; */

  getData(Cat: string) {
    this.http
      .get(
        `https://axes.onrender.com/api/projects/?filters[category][$eq]=${Cat}&populate=*`
      )
      .subscribe((data) => {
        this.data = data;
        this.filteredData = this.data.data;
        /*   console.log(this.filteredData); */
        if (this.filteredData.length === 0) {
          this.empty = true;
          this.NoPro = false;
        } else {
          this.empty = false;
          this.NoPro = true;
        }
      });
  }
  /*  filterData(category: string) {
    this.TestProjects.forEach((element: any) => {
      if (element.attributes.category === category) {
        this.filteredData?.push(element);
        this.filteredData?.push(element);
        this.filteredData?.push(element);
        this.filteredData?.push(element);
        this.filteredData?.push(element);
      }
    });
  } */
  getProject(id: number) {
    this.http
      .get(`https://axes.onrender.com/api/projects/${id}?populate=*`)
      .subscribe((data) => {
        this.OneProject = data;
        this.OneProject = this.OneProject.data;
        this.OneProject.attributes.description = marked(
          this.OneProject.attributes.description
        );
        console.log(this.OneProject);
        this.Pics = this.OneProject.attributes.projectPhotos.data;
        this.thumbSrc = this.Pics[0].attributes.url;
        // this.thumbSrc = this.Pics[0].attributes.formats.thumbnail.url;
        console.log(this.thumbSrc);

        this.OneProject.attributes.videoDataJson.forEach((element: any) => {
          const parts = element.split('/');
          const lastPart = parts[parts.length - 1];
          element = 'https://player.vimeo.com/video/' + lastPart;
          this.Vids?.push(element);
        });
        this.Vids.forEach((vd: any) => {
          this.safeVids.push(this.sanitizer.bypassSecurityTrustResourceUrl(vd));
        });
      });
  }
}

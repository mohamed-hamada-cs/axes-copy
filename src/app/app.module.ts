import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SectionComponent } from './components/landing-page/section/section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
/*  */
/* import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor'; */
/* import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
} from '@syncfusion/ej2-angular-richtexteditor'; */
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsComponent,
    SectionComponent,
    NavbarComponent,
    FooterComponent,
  ],
  /* RichTextEditorModule in imports */
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  /* ToolbarService, LinkService, ImageService, HtmlEditorService in Providses */
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

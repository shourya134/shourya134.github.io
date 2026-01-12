import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { BannerComponent } from './banner/banner.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { ContactComponent } from './contact/contact.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    BannerComponent,
    ResponsiveDirective,
    ContactComponent,
    WorkExpComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

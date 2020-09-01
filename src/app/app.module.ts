import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule , Routes} from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';



const appRoutes : Routes =  [

  {path:'user', component:UserComponent},

  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'courses', component:CoursesComponent},



]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    CoursesComponent,
    HomeComponent,
    CourseDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

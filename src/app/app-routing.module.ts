import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TodoComponent } from './views/todo/todo.component';


const routes: Routes = [

  {
    path: "",
    redirectTo: "/",
    pathMatch: "full",
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component:TodoComponent },
    ]
  },

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




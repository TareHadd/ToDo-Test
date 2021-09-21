import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './views/todo/todo.component';
import { AddComponent } from './views/todo/add/add.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListComponent } from './views/todo/list/list.component';
import { BlinkComponent } from './shared/blink/blink.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddComponent,
    NavbarComponent,
    FooterComponent,
    ListComponent,
    BlinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

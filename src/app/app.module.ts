import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { DndModule } from 'ng2-dnd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { PrazosComponent } from './prazos/prazos.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { PrazoComponent } from './prazos/prazo/prazo.component';
import { AppService } from './app.services';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    HomeComponent,
    AsideComponent,
    PrazosComponent,
    ProfissionaisComponent,
    PrazoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DndModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    DndModule
  ],
  providers: [AppService, ToastrService],
  bootstrap: [HomeComponent]
})
export class AppModule { }

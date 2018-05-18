import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lawsotf-prazos',
  templateUrl: './prazos.component.html',
  styleUrls: ['./prazos.component.css']
})
export class PrazosComponent implements OnInit {

  prazos: Observable<any[]>;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.prazos = this.service.listarPrazos(); 
  }
}

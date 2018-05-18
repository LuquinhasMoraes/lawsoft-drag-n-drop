import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'lawsotf-prazo',
  templateUrl: './prazo.component.html',
  styleUrls: ['./prazo.component.css']
})
export class PrazoComponent implements OnInit {
  
  @Input() prazos: any;

  constructor() {}

  ngOnInit() {
  }

}

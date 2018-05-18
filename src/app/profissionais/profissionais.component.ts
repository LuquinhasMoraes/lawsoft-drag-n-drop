import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'lawsotf-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {

  profissionais: any;

  constructor(private service: AppService, private toastrService: ToastrService ) { 
    
  }

  ngOnInit() {
    this.service.listarProfissionais().subscribe(response => this.profissionais = response);
  }

  removePrazo(id, item: any, indiceProfissional: any) {
    
    //Deletando objeto do escopo
    this.profissionais[indiceProfissional].prazosProfissional.splice(this.profissionais[indiceProfissional].prazosProfissional.indexOf(item), 1)
    
    // Deletando prazo do db.json
    this.service.removePrazos(id).subscribe(res => console.log(res));
    
    // Menssagem de sucesso
    this.toastrService.success('Item deletado', 'Muito bem!');
  }

  transferir($event: any, id: number) {
    
    function recarregarProfissionais(prazos, profissionais, lenght): Array<any[]> {
        
      for(var i = 0; i < lenght; i++) {
          if(prazos.profissionalId == profissionais[i].id )
            profissionais[i].prazosProfissional.push(prazos);
      }

      return profissionais;

    }

    this.service.setPrazos($event, id).subscribe(response => this.profissionais = recarregarProfissionais(response, this.profissionais, this.profissionais.length));
    this.toastrService.success('Prazo atribuído com sucesso!', 'Muito bem!');
  }



}

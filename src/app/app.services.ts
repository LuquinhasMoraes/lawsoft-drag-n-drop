import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {URL_API} from './api.config';
import { ErrorHandler } from "./app.error";

@Injectable()
export class AppService {

    receivedData: any = null;

    constructor(private http: Http) { }

    checkPrazos(idProfissional, id):  Observable<any[]> {
        return this.http.get(`${URL_API}/profissional/${idProfissional}/prazosProfissional?id=${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
    
    listarProfissionais(): Observable<any[]> {
        return this.http.get(`${URL_API}/profissional/?_embed=prazosProfissional`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    listarPrazos(): Observable<any[]> {
        return this.http.get(`${URL_API}/prazos`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    removePrazos(id): Observable<any[]> {
        return this.http.delete(`${URL_API}/prazosProfissional/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    pushReceivedData($event, id): void {
        
        this.receivedData = {
            description: "Received", 
            prazo: [ 
                {
                    id:      $event.dragData.id,
                    assunto: $event.dragData.Assunto,  
                    cliente: $event.dragData.Cliente, 
                    data:    $event.dragData.Data
                } 
            ],
            profissionalId: parseInt(id)
        };
    }

    setPrazos($event, id:number): Observable<any[]>  {
        this.pushReceivedData($event, id);
        return this.addPrazos(this.receivedData, id);
    }

    addPrazos(received, id:number ): Observable<any[]> {

        var data = received;
        return this.http.post(`${URL_API}/profissional/${id}/prazosProfissional`, 
        data, {
            headers: null
        })
        .map(res=> res.json())
        .catch(ErrorHandler.handleError);

    }
}
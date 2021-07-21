import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutoService } from '../produtos.services';
import { FormControl, FormGroup } from '@angular/forms';
import { Produto } from 'src/app/Produto';

@Component({
  selector: 'app-ConsultaProd',
  templateUrl: './ConsultaProd.component.html',
  styleUrls: ['./ConsultaProd.component.css']
})


export class ConsultaProdComponent implements OnInit {
  
  public produtos!: Produto[];
  constructor(private produtoservice:ProdutoService) { }

  ngOnInit():void {
    this.produtoservice.Listar().subscribe((resultado) => {this.produtos = resultado;      
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Produto } from 'src/app/Produto';
import { ProdutoService } from '../produtos.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-CadastroProd',
  templateUrl: './CadastroProd.component.html',
  styleUrls: ['./CadastroProd.component.css']
})
export class CadastroProdComponent implements OnInit {
  produto!:Produto;
  produtos=[];
  constructor(private produtoservice: ProdutoService) {}

  ngOnInit(): void {
    this.produto = new Produto()
  }

  Salvar(){
    
    this.produtoservice.IncluirProduto(this.produto).subscribe((resultado) => {      
    alert('Produto inserido com sucesso');
    this.produto = new Produto();
    });
  }


}

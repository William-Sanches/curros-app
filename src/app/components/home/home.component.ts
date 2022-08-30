import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidades } from 'src/app/models/cidades';
import { Estados } from 'src/app/models/estados';
import { Pontos } from 'src/app/models/pontos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formCadastro: FormGroup;

  public estados: Estados[] = [{
    id:1,
    nome: "São Paulo"}];
  public cidades: Cidades[] = [{
    id:1,
    nome: "São Paulo"}];

  pontosCadastrados: Pontos[] = [];

  constructor(public formBuilder: FormBuilder) {
    this.formCadastro = formBuilder.group({
      nome: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      cidade: ["", [Validators.required]],
      pontoDeVenda: ["", [Validators.required]],
      start: ["", [Validators.required]],
      end: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  public create(): void {
    if(this.formCadastro.valid){
      console.log(this.formCadastro);
      this.pontosCadastrados.push(this.formCadastro.value)
      console.log(this.pontosCadastrados);
    }
  }

}

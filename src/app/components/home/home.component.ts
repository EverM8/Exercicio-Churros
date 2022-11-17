import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cadastrado } from 'src/app/model/cadastrado';
import { Cidade } from 'src/app/model/cidade';
import { Ibge } from 'src/app/model/ibge';
import { CidadeService } from 'src/app/services/cidade.service';
import { IbgeService } from 'src/app/services/ibge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cadastrarPonto: FormGroup

  constructor(private ibgeService: IbgeService, fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.cadastrarPonto = fb.group({
      nome:[" ", [Validators.required]],
      estado: ["", [Validators.required]],
      cidade: ["", [Validators.required]],
      pontoVenda:["", [Validators.required]],
       comecaAs:["", [Validators.required]],
      terminaAs:["", [Validators.required]]
    })
    this.ibgeService = ibgeService;
  
   }
  
  public estado!:Ibge[]
  listaMunicipios!: Cidade[]
  public pontoDeVenda: Cadastrado[]=[]

  salva(){
    if(this.cadastrarPonto.valid) {
      const ponto: Cadastrado = this.cadastrarPonto.value
    this.pontoDeVenda.push(ponto)
    this._snackBar.open("Formlário Cadastrado!", "OK!")
    } else {
      this._snackBar.open("Formulário incompleto ou inválido!", "OK!")
    }
  }

  public isDisabledCidade: boolean = true;
  
listarCidades(sigla: string){
    this.ibgeService.listarMunicipios(sigla).subscribe(
      (cidades) => {
        this.listaMunicipios = cidades
      }
    ) 
  }


  ngOnInit(): void { 
    this.ibgeService.getAll().subscribe(estados=>{
      this.estado = estados
    })
  }

}

import { Router } from '@angular/router';
import { EmprestimoService } from '../../services/emprestimo.service';
import { NotificationService } from '../../services/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Emprestimo } from 'src/app/models/emprestimo';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.css']
})
export class NovoEmprestimoComponent implements OnInit {

  public formEmprestimo: FormGroup;
  public isLoadUpLoad: boolean = false;
  private  fotoUrl:string = "";

  constructor(
    fb: FormBuilder,
    private notification: NotificationService,
    private emprestimoService: EmprestimoService,
    private router: Router,
    private upLoadService: UploadService
  ) {
    this.formEmprestimo = fb.group({
      titulo: ["", [Validators.required]],
      leitor: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      telefone: ["", [Validators.required]],
      status: ["", [Validators.required]]
      /* dataEmprestimo: ["", [Validators.required]] */
    });
  }

  ngOnInit(): void {
  }

/*  public createEmprestimo(): void {
    if(this.formEmprestimo.valid) {
      const emprestimo: Emprestimo = this.formEmprestimo.value;
      this.emprestimoService.createEmprestimo(emprestimo).subscribe(response => {
        this.notification.showMessage("Cadastrado com sucesso.");
        this.router.navigate(["/dashboard"]);
      });
    }
    else {
      this.notification.showMessage("Dados inválidos.");
    }
  } */

  public novoEmprestimo():void{
    if(this.formEmprestimo.valid){
      const emprestimo: Emprestimo = this.formEmprestimo.value}}

  public uploadFile(event: any): void {
    this.isLoadUpLoad = true;
    const file: File= event.target.files[0];
  }
}

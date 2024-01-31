import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';


const modPrimeNg: any = [
  ButtonModule,
  CardModule,
  InputTextModule,
  PasswordModule,
  DividerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeNg
  ], exports: [
    modPrimeNg
  ]
})
export class PrimengModule { }

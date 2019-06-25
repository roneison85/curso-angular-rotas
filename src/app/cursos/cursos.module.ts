import { CursosRoutingModule } from './cursos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


@NgModule({
    imports: [
      CommonModule,
      CursosRoutingModule
    ],
    exports: [],
    declarations: [
      CursosComponent,
      CursoDetalheComponent,
      CursoNaoEncontradoComponent
    ],
    providers: [CursosService],
})

export class CursosModule {}

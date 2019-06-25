import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { NgModule } from '@angular/core';

const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})

export class CursosRoutingModule {}

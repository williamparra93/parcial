import { NgModule } from "@angular/core";
import {Routes,RouterModule } from "@angular/router";

import { ThemeComponent } from './theme/theme.component';

export const routes: Routes=[
    {path: 'grupoa', component: ThemeComponent,
    children: [
        {path: '', loadChildren:'./grupoa/grupoa.module#GrupoaModule',}
    ]},
    {path: 'grupob', component: ThemeComponent,
    children: [
        {path: '', loadChildren:'./grupob/grupob.module#GrupobModule',}
    ]}
]


@NgModule({
imports:[ RouterModule.forRoot(routes,{useHash:true})],
exports:[RouterModule],
providers:[]
}) 
export class AppRoutingModule {}
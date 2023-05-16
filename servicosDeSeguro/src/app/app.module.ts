import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { SecaoInicialComponent } from './componentes/conteudo/secao-inicial/secao-inicial.component';
import { SobreServicosComponent } from './componentes/conteudo/sobre-servicos/sobre-servicos.component';
import { SobrePlanosComponent } from './componentes/conteudo/sobre-planos/sobre-planos.component';
import { SobreRecursosComponent } from './componentes/conteudo/sobre-recursos/sobre-recursos.component';
import { PassosComponent } from './componentes/conteudo/passos/passos.component';
import { CarrousselComponent } from './componentes/conteudo/carroussel/carroussel.component';
import { CompaniasParceirasComponent } from './componentes/conteudo/companias-parceiras/companias-parceiras.component';
import { PerguntasFrequentesComponent } from './componentes/conteudo/perguntas-frequentes/perguntas-frequentes.component';
import { DestaqueComponent } from './componentes/conteudo/destaque/destaque.component';
import { InscreverComponent } from './componentes/conteudo/inscrever/inscrever.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    SecaoInicialComponent,
    SobreServicosComponent,
    SobrePlanosComponent,
    SobreRecursosComponent,
    PassosComponent,
    CarrousselComponent,
    CompaniasParceirasComponent,
    PerguntasFrequentesComponent,
    DestaqueComponent,
    InscreverComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

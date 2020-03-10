import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { TopBarPicComponent } from "./top-bar-pic/top-bar-pic.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { PokemonAlertsComponent } from "./pokemon-alerts/pokemon-alerts.component";
import { CommonModule } from "@angular/common";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { ShinyPokemonComponent } from "./shiny-pokemon-list/shiny-pokemon-list.component";
import { ShinyPokemonDetailsComponent } from "./shiny-pokemon-details/shiny-pokemon-details.component";
import { PokemonService } from "./pokemon.service";
import { PokemonTeamComponent } from "./pokemon-team/pokemon-team.component";
import { HttpClientModule } from "@angular/common/http";
import { TopTeamsComponent } from "./top-teams/top-teams.component";
import { AboutComponent } from "./about/about.component";
import { PokemonFromFile } from "./pokemon-from-file/pokemon-from-file.component";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "shiny", component: ShinyPokemonComponent },
      { path: "pokemon/:pokemonNumber", component: PokemonDetailsComponent },
      {
        path: "shinypokemon/:pokemonNumber",
        component: ShinyPokemonDetailsComponent
      },
      { path: "team", component: PokemonTeamComponent },
      { path: "top-teams", component: TopTeamsComponent },
      { path: "about", component: AboutComponent },
      { path: "pokemon-from-file", component : PokemonFromFile}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TopBarPicComponent,
    ProductListComponent,
    PokemonAlertsComponent,
    PokemonDetailsComponent,
    ShinyPokemonComponent,
    ShinyPokemonDetailsComponent,
    PokemonTeamComponent,
    TopTeamsComponent,
    AboutComponent,
    PokemonFromFile
  ],
  bootstrap: [AppComponent],
  providers: [PokemonService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

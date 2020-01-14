import { Component } from "@angular/core";
import { shinypokemon } from "../shinypokemon";

@Component({
  selector: "app-shiny-pokemon-list",
  templateUrl: "./shiny-pokemon-list.component.html",
  styleUrls: ["./shiny-pokemon-list.component.css"]
})
export class ShinyPokemonComponent {
  pokemon = shinypokemon;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

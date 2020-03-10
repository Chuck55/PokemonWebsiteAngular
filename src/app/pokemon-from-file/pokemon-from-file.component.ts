import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";


@Component({
  selector: "app-pokemon-from-file",
  templateUrl: "./pokemon-from-file.component.html",
  styleUrls: ["./pokemon-from-file.component.css"]
})
export class PokemonFromFile implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  ngOnInit() {
  }
  stuff() {
    console.log(data.Shiny);
  }

}

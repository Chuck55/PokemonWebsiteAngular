import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { pokemon } from "../pokemon";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  pokemons = pokemon;
  number = 0;
  numberOfWins = 0;
  currentPokemon = this.pokemons[this.number];
  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService) {}

  checkName(pokemonName, pokemon) {
    console.log(pokemon)
    if (this.pokemonService.checkName(pokemonName, this.currentPokemon)){
      this.currentPokemon = this.pokemons[this.randomIntFromInterval(1, 35)];
      this.numberOfWins++;
      window.alert("Correct!");
      console.log("Yeet");
    } else {
      window.alert("Incorrect Pokemon");
      console.log("No");
    }
  }
  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  ngOnInit() {}
}

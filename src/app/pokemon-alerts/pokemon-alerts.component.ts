import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-alerts',
  templateUrl: './pokemon-alerts.component.html',
  styleUrls: ['./pokemon-alerts.component.css']
})
export class PokemonAlertsComponent implements OnInit {
  @Input() pokemon;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
import { Component } from "@angular/core";
import { pokemon } from "../pokemon";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  pokemon = pokemon;
  share() {
    window.alert("The product has been shared!");
  }
  WhatAreYouElec() {
    window.alert("You Wanna Shock Everyone");
  }
  WhatAreYouRamp() {
    window.alert("You Wanna Run Into A Wall");
  }
  WhatAreYouMyst() {
    window.alert("What Are You?");
  }
  informMystery() {
    window.alert("This pokemon is still under research");
  }
  informRock() {
    window.alert("This pokemon is hard as rock");
  }
  informElec() {
    window.alert("This pokemon is shocking");
  }
  /*
  showIt(id) {
    $('#imageshow').on('', this.showIt);
    var Url = document.getElementById('imageshow') as HTMLInputElement;
    console.log(id);
    Url.src=id;
    Url.style.display='block';
  }
*/
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

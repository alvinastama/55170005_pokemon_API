import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from "./pokemon.service";

@Component({
    selector: "ns-details",
    templateUrl: "./pokemon-detail.component.html",
})
export class PokemonDetailComponent implements OnInit {
    name;
    pokemon;
    region;

    constructor(private route: ActivatedRoute, private ps: PokemonService) {}

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;
        this.ps.getPokemon(this.name).subscribe(
            (response: any) => {
                this.pokemon = response;
            }
        );
        
    }

    loadRegion(){
        this.region = this.route.snapshot.params.region;
        this.ps.getRegion(this.region).subscribe(
            (response: any) => {
                this.region = response;
            }
        );
    }
}

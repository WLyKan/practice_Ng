import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    // hero = 'Windstorm';
    // hero: Hero = {
    //     id: 1,
    //     name: 'Windstorm'
    // };
    heroes = HEROES;
    selectedHero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor() {
    }

    ngOnInit() {
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}

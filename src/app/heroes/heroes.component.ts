import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

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
    // heroes = HEROES;
    heroes: Hero[];

    // selectedHero: Hero = {
    //     id: 1,
    //     name: 'Windstorm'
    // };

    // 让构造函数保持简单，只做初始化操作，比如把构造函数的参数赋值给属性。数据访问逻辑交给service
    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    // onSelect(hero: Hero): void {
    //     this.selectedHero = hero;
    // }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe((heroes) => {
                this.heroes = heroes;
            });
    }

}

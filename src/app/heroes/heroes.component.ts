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

    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name } as Hero)
            .subscribe(hero => {
                this.heroes.push(hero);
            });
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        // 如果你忘了调用 subscribe()，本服务将不会把这个删除请求发送给服务器。
        //  作为一条通用的规则，Observable 在有人订阅之前什么都不会做。
        this.heroService.deleteHero(hero).subscribe();
    }

}

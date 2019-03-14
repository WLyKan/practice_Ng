import { Component, OnInit, Input } from '@angular/core';
import { ActivedRoute, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})


export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        // 保存着到这个 HeroDetailComponent 实例的路由信息。
        // 这个组件对从 URL 中提取的路由参数感兴趣。 其中的 id 参数就是要显示的英雄的 id。
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location // 使用它来导航回上一个视图
    ) {}

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id'); // (+) 操作符会把字符串转换成数字
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero)
    }

    goBack(): void {
        this.location.back();
    }

}

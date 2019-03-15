import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
    heroes$: Observable<Hero[]>; // 声明为一个 Observable
    private searchTerms = new Subject<string>(); // 声明成了 RxJS 的 Subject 类型。

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroes$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300), // 实际发起请求的间隔永远不会小于 300ms，减轻服务器请求压力

            // ignore new term if same as previous term
            distinctUntilChanged(), // 只在过滤条件变化时才发送请求

            // switch to new search observable each time the term changes
            switchMap((term: string) => this.heroService.searchHeroes(term)),
        );
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

}

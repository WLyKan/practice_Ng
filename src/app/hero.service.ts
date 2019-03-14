import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor() { }

    // getHeroes(): Hero[] {
    //     return HEROES;
    // }
    getHeroes(): Observable<Hero[]> {
        return of(HEROES); // 返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组
    }
}

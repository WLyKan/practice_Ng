import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
// 这是一个典型的“服务中的服务”场景,
// MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    // getHeroes(): Hero[] {
    //     return HEROES;
    // }
    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES); // 返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
// 这是一个典型的“服务中的服务”场景,
// MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    // Log a HeroService message with the MessageService
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    getHeroes(): Observable<Hero[]> {
        // this.messageService.add('HeroService: fetched heroes');
        // return of(HEROES); // 返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(_ => this.log('fetched heroes')),
                catchError(this.handleError<Hero[]>('getHeroes', []))
            );
    }

    /** GET hero by id. Will 404 if id not found */
    getHero(id: number): Observable<Hero> {
        // this.messageService.add(`HeroService: fetched hero id=${id}`);
        // return of(HEROES.find(hero => hero.id === id));
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.log(error);

            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
}

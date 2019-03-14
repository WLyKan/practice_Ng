import { BrowserModule } from '@angular/platform-browser'; // 浏览器运行必备
import { NgModule } from '@angular/core'; // ng模块装饰器
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // 引入ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ // 声明组件
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [ // 引入全局模块
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

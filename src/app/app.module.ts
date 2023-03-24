import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from './material.module';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { OutlineComponent } from './pages/outline/outline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { AccountComponent } from './pages/account/account.component';
import { CreditCreditcardComponent } from './pages/credit-creditcard/credit-creditcard.component';
import { SharedDirectivesModule } from './directives/share-directives.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    OverviewComponent,
    SidenavComponent,
    OutlineComponent,
    TransactionComponent,
    AccountComponent,
    CreditCreditcardComponent
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerWhenStable:3000' }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgApexchartsModule,
    NgbModule,
    SharedDirectivesModule
  ],
  providers: [
    {
      provide: LocationStrategy , useClass: HashLocationStrategy // fix when 404 refresh page
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

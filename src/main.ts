import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { environment } from './app/environment';
import { routing, appRoutingProviders } from './app/app.routing';

import { NgModule } from '@angular/core';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './app/home';
import { ArrivalComponent } from './app/arrival';
import { EncountersComponent } from './app/encounters';
import { ReportComponent } from './app/report';
import { PostsComponent } from './app/posts';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	providers: [
		HTTP_PROVIDERS,
		appRoutingProviders,
	],
	declarations: [
		AppComponent,
		HomeComponent,
		ArrivalComponent,
		EncountersComponent,
		ReportComponent,
		PostsComponent
	],
	exports: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);



if (environment.production) {
  enableProdMode();
}



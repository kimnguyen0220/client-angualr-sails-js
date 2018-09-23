import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FrontComponent } from './modules/front/front.component';

const rootRouter: Routes = [
	{
		path: '',
		component: FrontComponent
	}
];

export const AppRoutingModule = RouterModule.forRoot(rootRouter);

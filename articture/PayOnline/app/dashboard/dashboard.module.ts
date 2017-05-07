import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { ChartModule } from './charts/chart.module';
import { BlankPageModule } from './blank-page/blankPage.module';
import { TableModule } from './tables/table.module';
import { FormModule } from './forms/forms.module';
import { GridModule } from './grid/grid.module';
import { BSElementModule } from './bs-element/bsElement.module';

import { DashboardComponent } from './dashboard.component';
import {TopNavComponent,SidebarComponent,NameService } from '../shared/index';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
        ChartModule,
        TableModule,
        FormModule,
        GridModule,
        BSElementModule,
        BlankPageModule
    ],
    providers: [ NameService ],
    declarations: [DashboardComponent, TopNavComponent,SidebarComponent],
    exports: [DashboardComponent,TopNavComponent, SidebarComponent ]
})

export class DashboardModule { }

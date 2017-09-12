import { NgModule } from '@angular/core';
import { PlanListComponent } from './plan-list/plan-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { PlansService } from '../services/plans.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlanCardComponent } from './plan-list/plan-card/plan-card.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './macros/chart/chart.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';


@NgModule({
  declarations: [
    PlanListComponent,
    PlanCardComponent,
    PlanDetailsComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [
    PlansService
  ],
  exports: [
    PlanListComponent,
    PlanCardComponent,
    PlanDetailsComponent,
    ChartComponent
  ]
})
export class CoreAppModule {}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Plan } from '../../models/plan-model';
import { PlansService } from '../../services/plans.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  public plans$: Observable<Array<Plan>>;

  constructor(
    private plansService: PlansService
  ) {}

  ngOnInit () {
    this.plans$ = this.plansService.getPlans();

    this.plansService.getPlans().subscribe(plans => {
      console.log(plans);
    })
  }

  trackByPlanId(index, plan) {
    return plan.id;
  }
}

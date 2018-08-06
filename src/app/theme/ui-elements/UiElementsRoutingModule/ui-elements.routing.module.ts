import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from '../general/general.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { IconsComponent } from '../icons/icons.component';
import { SlidersComponent } from '../sliders/sliders.component';
import { ModalsComponent } from '../modals/modals.component';
import { TimelineComponent } from '../timeline/timeline.component';

const routes: Routes = [
  { path: '', component: GeneralComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'sliders', component: SlidersComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementsRoutingModule { }

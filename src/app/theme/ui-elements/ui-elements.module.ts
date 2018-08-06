import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { IconsComponent } from './icons/icons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ModalsComponent } from './modals/modals.component';
import { UiElementsRoutingModule } from './UiElementsRoutingModule/ui-elements.routing.module';

@NgModule({
  imports: [
    CommonModule, UiElementsRoutingModule
  ],
  declarations: [GeneralComponent, IconsComponent, ButtonsComponent, SlidersComponent, TimelineComponent, ModalsComponent]
})
export class UiElementsModule { }

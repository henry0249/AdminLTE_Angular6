import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeRoutingModule } from './ThemeRoutingModule/theme.routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, ThemeRoutingModule
  ],
  declarations: [ThemeComponent]
})
export class ThemeModule { }

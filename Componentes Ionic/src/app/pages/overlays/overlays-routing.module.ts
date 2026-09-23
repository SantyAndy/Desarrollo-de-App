import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlaysPage } from './overlays.page';
const routes: Routes = [{ path: '', component: OverlaysPage }];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class OverlaysPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from "./appRouting.utils"
import { CommonModule } from "@angular/common"
import { RouteLinksComponent } from "../components/route-links/route-links.component"

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [RouteLinksComponent],
  exports: [RouterModule, RouteLinksComponent]
})
export class AppRoutingModule { }

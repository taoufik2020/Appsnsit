import { NotfoundComponent } from "./notfound/notfound.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AjoutComponent } from "./ajout/ajout.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "add", component: AjoutComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

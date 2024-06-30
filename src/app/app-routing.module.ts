import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:"new",component:AddnewComponent},
  {path:"list",component:DisplaylistComponent},
  {path:"details/:id",component:DisplaydetailsComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"",component:DisplaylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

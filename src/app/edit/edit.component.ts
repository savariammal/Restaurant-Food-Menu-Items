import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id:number = 0;
  itemobj = new Item("","",0);
  itemtypes:string[] = ["Starters","Main Course","Desserts","Bevereges"];
  constructor(private act:ActivatedRoute,private servobj:ItemService,private rtr:Router)
  {
    this.itemtypes.sort();
    this.id = this.act.snapshot.params["id"];
    this.servobj.selectbyid(this.id).subscribe((dt)=>{
      this.itemobj = dt;
    });
 
  }

  savedata()
  {
    this.servobj.update(this.id,this.itemobj).subscribe(()=>{
      this.rtr.navigateByUrl("/");
    });
  }
}

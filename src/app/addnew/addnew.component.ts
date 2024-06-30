import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
  
})
export class AddnewComponent {
  itemobj = new Item("","Starters",0);
  itemtypes:string[] = ["Starters","Main Course","Desserts","Bevereges"];
  constructor(private servobj:ItemService,private rtr:Router)
  {
    this.itemtypes.sort();
  }
  savedata()
  {
    this.servobj.insert(this.itemobj).subscribe(()=>{
      this.rtr.navigateByUrl("/");
    });
  }
}

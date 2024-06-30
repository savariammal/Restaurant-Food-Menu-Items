import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent {
  id:number = 0;
  itemobj = new Item("","",0);
  constructor(private act:ActivatedRoute,private servobj:ItemService,private rtr:Router)
  {
    this.id = this.act.snapshot.params["id"];
    this.servobj.selectbyid(this.id).subscribe((dt)=>{
      this.itemobj = dt;
    });
  }

  removecode()
  {
    let conf:boolean = confirm("Are you sure?");
    if(conf)
    {
      this.servobj.remove(this.id).subscribe(()=>{
          this.rtr.navigateByUrl("/");
      });
    }
  }

}

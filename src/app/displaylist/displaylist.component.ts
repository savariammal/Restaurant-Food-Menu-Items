import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent {
  ar:Item[] = [];
  constructor(private servobj:ItemService)
  {
    this.servobj.selectall().subscribe((dt)=>{
      this.ar = dt;
    });
  }
}

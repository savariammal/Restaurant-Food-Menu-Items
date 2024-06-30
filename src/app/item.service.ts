import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private hobj:HttpClient) { }
  public insert(itemobj:Item)
  {
    let prgurl="http://localhost:3000/menuitems";
    return this.hobj.post(prgurl, JSON.stringify(itemobj));
  }
  public selectall()
  {
    let prgurl="http://localhost:3000/menuitems";
    return this.hobj.get<Item[]>(prgurl);
  }
  public selectbyid(id:number)
  {
    let prgurl="http://localhost:3000/menuitems/"+id;
    return this.hobj.get<Item>(prgurl);
  }
  public remove(id:number)
  {
    let prgurl="http://localhost:3000/menuitems/"+id;
    return this.hobj.delete(prgurl);
  }

  public update(id:number,itemobj:Item)
  {
    let prgurl="http://localhost:3000/menuitems/"+id;
    return this.hobj.put(prgurl, JSON.stringify(itemobj));
  }
}

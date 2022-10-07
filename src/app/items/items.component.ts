import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items:Array<any>= []; 
  offset: 0;
  constructor(private itemService: ItemsService) { }
  p: number = 1;
  cookiesToken:any;
  totalItems: number= 1000;
  ngOnInit(): void {
    this.cookiesToken= JSON.parse( document.cookie.split('=')[1]);

    this.getItems(0);

  }
  getItems(offset:number){
    try{
      if(document.cookie){
        this.itemService.getPhone(this.cookiesToken['token-ml'], offset).subscribe((resp: any)=>{
          this.items= resp.results;
          console.log(resp);
        });
      }
    }catch(e){
      console.log('error', e);
    }
   
  }
  pageChanged(pageNum:number){
    (pageNum == 1)? this.getItems(0 ) :  this.getItems(pageNum*40 );
    

    
  }

}

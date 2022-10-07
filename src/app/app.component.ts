import { Component, OnInit } from '@angular/core';
import { ItemsService } from './services/items.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CELULARES MELI';
  constructor(private itemService: ItemsService){

  }
  ngOnInit(): void {
    let code = 'TG-633fadd28288e50001103553-167411682';
    let token:any;
    
    let cookiesToken: any;
    if(!document.cookie){
      this.itemService.updateToken(code).subscribe((resp: any)=>{
       document.cookie =`tokens=${JSON.stringify({"token-ml":resp.access_token, "token-ml-refresh": resp.refresh_token})}`;
        console.log('token actualizado',resp );
      });
    }
  }
}

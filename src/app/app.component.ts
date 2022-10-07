import { Component, OnInit } from '@angular/core';
import { ItemsService } from './services/items.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-ibushak';
  constructor(private itemService: ItemsService){

  }
  ngOnInit(): void {
   
    let code = 'TG-633f9f17a2d11500019aaecc-167411682';
    let token:any;
    
   let cookiesToken: any;
   if(document.cookie)
   cookiesToken= JSON.parse( document.cookie.split('=')[1]);
   this.itemService.getL().subscribe((resp) => {console.log('getl', resp)})
   this.itemService.getToken(code).subscribe((response: any)=>{
    console.log(response); 
    if(response.status == 400){
      this.itemService.updateToken(cookiesToken['token-ml-refresh']).subscribe((resp: any)=>{
        console.log('token actualizado',resp );
      });

    }else {
      let jsonToken = JSON.stringify({ "token-ml": response.access_token, "token-ml-refresh": response.refresh_token }); 
      document.cookie = `tokens=${jsonToken}`;
    }
    
  
   //this.itemService.getPhone(token.access_token, token.refresh_token).subscribe((response: any)=> console.log(response));
   
  });
   
     
  }
}

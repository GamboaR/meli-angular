import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { 
   
  }
  getToken(code:String){
    return this.http.post('https://api.mercadolibre.com/oauth/token', 
      {
        'grant_type':'authorization_code' ,
      'client_id': '5700302036723737' ,
      'client_secret': 'EbfYa5nCgvmI4p1AAbGDA2ev4WBqCSKb' ,
      'code': code, /// new code
      'redirect_uri':'https://meli-angular-app.herokuapp.com'
      },{
        headers: {'accept': 'application/json',
       'content-type': 'application/x-www-form-urlencoded'}});
  }
  updateToken(refreshToken:string){
    return this.http.post('https://api.mercadolibre.com/oauth/token', 
      {
      'grant_type':'refresh_token' ,
      'client_id': '5700302036723737' ,
      'client_secret': 'EbfYa5nCgvmI4p1AAbGDA2ev4WBqCSKb' ,
      'refresh_token':refreshToken
      },
      {
        headers: {'accept': 'application/json',
       'content-type': 'application/x-www-form-urlencoded'}});
  }
  getPhone(token:string, offset:number){
    return this.http.get('https://api.mercadolibre.com/sites/MLM/search?q=celular&sort=price_asc&limit=40&offset='+offset,{
      headers: {'accept': 'application/json',
     'Authorization': 'Bearer '+token}});
  }
  getCategories (token:string){
    return this.http.get('https://api.mercadolibre.com/sites/MLM/categories', 
    {
      headers: {'accept': 'application/json',
     'Authorization': 'Bearer '+token}});
    }
  
}

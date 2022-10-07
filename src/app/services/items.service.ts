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
  getPhone(token:string, tokenRefresh:string | null){
    let bear = 'Bearer '+token;
    /// curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?category=MLA1051
    return this.http.get('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055',{
      headers: {'accept': 'application/json',
     'Authorization': bear}});
  }
getL (){
  return this.http.get('https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id=5700302036723737&redirect_uri=https://meli-angular-app.herokuapp.com', 
  { headers:{"Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}  });
}
  
}

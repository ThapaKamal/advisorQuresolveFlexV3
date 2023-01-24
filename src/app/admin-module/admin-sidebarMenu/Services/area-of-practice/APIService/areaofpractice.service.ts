import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaofpracticeService {
  constructor(private http:HttpClient) 
  { }

  private url = 'http://localhost:8080/api/get';

  postValue(data:any){
    return this.http.post(this.url + '/addareaofpractice',data);
  }

  getValue():Observable<any>{
    return this.http.get(this.url + '/areaofpractice');
  }

  putValue( data:any,id:number){
    // console.log(data.value);
    // console.log(id);
    const obj={
        id:id,
        value:data.value
    }
    return this.http.put<any>(this.url +'/areaofpracticeupdate/',obj)
  }
   
  deleteValue(id:number){
    return this.http.delete<any>(this.url+'/areaofpracticedelete/'+id)
  }       
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { Observable } from 'rxjs';
import { PostPayload } from '../addPost/add-post/post.payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  private url = 'http://localhost:8080/blog';

  constructor( private httpClient :HttpClient) 
  { }


  addPost(postPayload: PostPayload): Observable<any> {
    return this.httpClient.post(this.url +'/legal/post', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>>{
   return this.httpClient.get<Array<PostPayload>>(this.url+'/all');
  }

  getPost(permaLink:Number):Observable<PostPayload> {
   return this.httpClient.get<PostPayload>(this.url+'/get/'+ permaLink);
  }

  putPost( data:any,id:number){
    const obj={
        id:id,
        value:data.value
    }
    return this.httpClient.put<any>(this.url +'/blog/',obj)
  }
   
  deletePost(id:any){
    return this.httpClient.delete<any>(this.url+'/blog/'+id)
  }
}

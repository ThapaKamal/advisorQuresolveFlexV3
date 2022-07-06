import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPostService } from '../../service/add-post.service';
import { PostPayload } from '../add-post/post.payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts$!: Observable<Array<PostPayload>>;

  constructor( private postService: AddPostService) { }

  editPost(){
    
  }

  deleteValue(id: any){
    this.postService.deletePost(id)
    .subscribe({
      next:(res)=>{ 
        alert("Post Deleted Successfully")
       this.ngOnInit() 
      },
      error:()=>{
        alert("Error while Deleting the Post!!")
      }
    })
  }
  ngOnInit(){
    this.posts$ =this.postService.getAllPosts();
  }

}

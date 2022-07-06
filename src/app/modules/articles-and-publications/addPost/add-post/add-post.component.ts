import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';


import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import { PostPayload } from './post.payload';
import { AddPostService } from '../../service/add-post.service';
// import { UploadAdapter } from './UploadAdapter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  // filteredTags: Observable<string[]>;
  tags: string[] = ['General'];
  allTags: string[] = ['General ', 'Legal ', 'Tax', 'Software', 'Marketing'];

  postPayload!: PostPayload;
  addPostForm!: FormGroup;

  title = new FormControl('');
  tagCtrl = new FormControl('');
  body = new FormControl('');


  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  public Editor = ClassicEditor;
  http!: HttpClient;

  constructor(private _formBuilder: FormBuilder,
    private addpostService: AddPostService,
    private router: Router,
  ) {

    this.addPostForm = this._formBuilder.group({
      title: new FormControl('', [Validators.required]),
      // tagCtrl: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),

    });

    this.addPostForm = new FormGroup(
      {
        title: this.title,
        tagCtrl: this.tagCtrl,
        body: this.body
      });

    this.postPayload = {
      id: '',
      body: '',
      title: '',
      // tagCtrl: '',
      // username: '',
      created: new Date()
    }

  //   this.filteredTags = this.tagCtrl.valueChanges.pipe(
  //     startWith(null),
  //     map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
  //   );

  // }

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.tags.push(value);
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();

  //   this.tagCtrl.setValue(null);
  // }

  // remove(tag: string): void {
  //   const index = this.tags.indexOf(tag);

  //   if (index >= 0) {
  //     this.tags.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.tags.push(event.option.viewValue);
  //   // this.tagInput.nativeElement.value = '';
  //   this.tagCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  // }
  }

  ngOnInit() {
  }

  // onReady(eventData) {
  //   eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
  //     console.log(btoa(loader.file));
  //     return new UploadAdapter(loader);
  //   };
  // }
  // onReady($event){
  //   $event.plugins.get('FileRepository').createUploadAdapter = (loader)=> {
  //     return new UploadAdapter(loader,'',this.http);
  //   };
  // }

  addPost() {
    this.postPayload = this.addPostForm.value;
    // this.postPayload.tagCtrl = this.addPostForm.tagCtrl.value;
    // this.postPayload.dateTime = this.addPostForm..value;
    console.log(this.addPostForm.value)
    this.addpostService.addPost(this.postPayload)
      .subscribe((data: any) => {
        if (data) {
          console.log('Post success');
          this.router.navigateByUrl('/articlesAndPublications');
        } else {
          console.log('Failure Response');
          this.router.navigateByUrl('/articlesAndPublications');
          alert('Failure Response');
        }
      });
  }
}

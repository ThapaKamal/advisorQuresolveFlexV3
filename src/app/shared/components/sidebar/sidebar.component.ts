import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RetriveImageService } from '../../service/retrive-image.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  

  imageToShow: any;
  isImageLoading!: boolean;

  constructor(private imageService:RetriveImageService,
     private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getImageFromService();
  
  }

   getImageFromService() {
    this.isImageLoading = true;
    this.imageService.getImageData().subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}

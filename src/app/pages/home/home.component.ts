import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: any[] = [];
  photos: any[] = [];
  searchTerm: string = '';
  filteredPhotos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

    this.apiService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

  search() {
    if (this.searchTerm.trim() === '') {
      this.filteredPhotos = [...this.photos];
    } else {
      this.filteredPhotos = this.photos.filter(photo => {
        return photo.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }
}

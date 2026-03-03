import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './albums-detail.html',
  styleUrl: './albums-detail.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saveMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  saveAlbum() {
    if (!this.album) return;
    const updated = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album!.title = this.editTitle;
      this.saveMessage = '✅ Title saved!';
      setTimeout(() => this.saveMessage = '', 2000);
    });
  }

  viewPhotos() {
    this.router.navigate(['/albums', this.album!.id, 'photos']);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsPhotos } from './albums-photos';

describe('AlbumsPhotos', () => {
  let component: AlbumsPhotos;
  let fixture: ComponentFixture<AlbumsPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsPhotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsPhotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

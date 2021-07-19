import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Post {
  id?: string;
  titulo: string;
  subtitulo?: string;
 descripcion: string;
  image?: {
    formats: {
      small: {
        url: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  API = "http://localhost:1337/posts"

  getPosts() {
    return this.http.get<Post[]>(this.API);
  }

  createPost(titulo: string, descripcion: string) {
    return this.http.post<Post[]>(this.API, {
      titulo,
      descripcion,
    });
  }

  removePost(id: string) {
    return this.http.delete<Post>(`${this.API}/${id}`);
  }

  getPostById(id: string) {
    return this.http.get<Post>(`${this.API}/${id}`);
  }

  updatePost(id: string, post: Post) {
    return this.http.put(`${this.API}/${id}`, post);
  }
}

import { Component, OnInit } from "@angular/core";
import { PostService, Post } from "../services/post.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.page.html',
  styleUrls: ['./post-form.page.scss'],
})
export class PostFormPage implements OnInit {
  post: Post = {
    titulo: "",
    descripcion: "",
  };
  editing = false;
  constructor(private postService: PostService,
    private router: Router,
    private actiavtedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actiavtedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get("postId")) {
        this.postService
          .getPostById(paramMap.get("postId"))
          .subscribe((res) => {
            this.post = res;
            this.editing = true;
          });
      }
    });
  }

  savePost() { 
    console.log('asdfas',this.post.titulo)
    this.postService
      .createPost(this.post.titulo, this.post.descripcion)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(["/post"]);
      });
  }

  updatePost() {
    this.postService
      .updatePost(this.post.id, {titulo: this.post.titulo,descripcion: this.post.descripcion,})
      .subscribe((res) => {
        console.log(res);
        this.editing = false;
        this.router.navigate(["/post"]);
      });
  }

}

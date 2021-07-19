import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { PostService, Post } from "../services/post.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ["./post.page.scss"],
})
export class PostPage implements OnInit {
  posts: Post[] = [
    
  ];


  constructor( private postService: PostService,
    private alertController: AlertController) { this.loadPosts();}

    loadPosts() {
      this.postService.getPosts().subscribe(
        (res) => {
          this.posts = res;
          console.log('ereda0',res)
        },
        (err) => console.log(err)
      );
    }

  ngOnInit() {
    this.loadPosts();
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.loadPosts();
  }

  async removePost(id: string) {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: [
        "Cancel",
        {
          text: "Okay",
          handler: () => {
            this.postService.removePost(id).subscribe(
              (res) => {
                console.log(res);
                this.loadPosts();
              },
              (err) => console.log(err)
            );
          },
        },
      ],
    }); 

    await alert.present();
  }

}

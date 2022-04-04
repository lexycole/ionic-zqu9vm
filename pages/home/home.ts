import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpClientModule, } from '@angular/common/http';
import { TodoProvider } from '../../providers/todoProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // todos = [
  //       'Pokémon Yellow',
  //       'Super Metroid',
  //       'Mega Man X',
  //       'The Legend of Zelda',
  //       'Pac-Man',
  //       'Super Mario World',
  //       'Street Fighter II',
  //       'Half Life',
  //       'Final Fantasy VII',
  //       'Star Fox',
  //       'Tetris',
  //       'Donkey Kong III',
  //       'GoldenEye 007',
  //       'Doom',
  //       'Fallout',
  //       'GTA',
  //       'Halo'
  // ];

  // todoSelected(todo: string) {
  //   console.log("Selected Item", todo);
  // }
  
  // presentLoading() {
  //   const loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 2000
  //   });
    
  //   loader.present();
  //   }

  todos: any;

  // goAdduserPage() {
  //   this.navCtrl.push('AdduserPage', {});
  // }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.todos = data;
      console.log(this.todos);
    });
  }

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public restProvider: TodoProvider,
    public httpClient: HttpClient) { 
      this.getUsers();
    }
}

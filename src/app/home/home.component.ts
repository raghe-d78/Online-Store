import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  welcomeMessage: string = 'Welcome to our Online Store!';
  discoverMessage: string = 'Discover our latest collection of smartphones from top brands';
  promotions: string[] = ['Get a free case every smatphone purshase',
                         'Trade-in your old pjone and get upto 30% off',
                       ' free expedited shipping on all smatphone orders'];
}

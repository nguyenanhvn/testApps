import { Component, OnInit } from '@angular/core';
import { Film }          from './film';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'app works!';
  	films: Film[];

  	constructor(private appService: AppService){  }
  	getList(): void {
	    // this.appService.getList().subscribe(films => this.films = films);
	    this.appService.getList().then(films => this.films = films);      
	}
  	add(value){
  		this.appService.add(value);
  	}

  	delete(id): void {
	    this.appService.delete(id);
	}

  	ngOnInit(): void {
    	this.getList();
	}
}

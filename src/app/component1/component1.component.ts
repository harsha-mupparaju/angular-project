import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
  
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public Movies=[];
  constructor(private _service : ServiceService) { }

  ngOnInit() {
    this._service.getMovies()
    .subscribe(data=>{this.Movies= data
    console.log(data);
  }
);
  }

}

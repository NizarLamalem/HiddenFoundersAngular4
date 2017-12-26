import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-near-byshops',
  templateUrl: './near-byshops.component.html',
  styleUrls: ['./near-byshops.component.css']
})
export class NearByshopsComponent implements OnInit {
  dataType = ClassesService.CloseShops;
  constructor() { }

  ngOnInit() {
  }

}

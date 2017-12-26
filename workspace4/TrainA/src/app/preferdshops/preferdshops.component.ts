import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-preferdshops',
  templateUrl: './preferdshops.component.html',
  styleUrls: ['./preferdshops.component.css']
})
export class PreferdshopsComponent implements OnInit {
  public preferedshops = true;
  dataType = ClassesService.AllShops;
  constructor() { }

  ngOnInit() {
  }

}

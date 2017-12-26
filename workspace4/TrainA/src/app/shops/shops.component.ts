import { Component, OnInit, Input } from '@angular/core';
import { ClassesService } from '../classes.service';
import { Shop } from '../classes/shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  @Input() public shopItem: Shop;
  @Input() public PreferedShop= false ;
constructor() {
}

ngOnInit() {

}

}

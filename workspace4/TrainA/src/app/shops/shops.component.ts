import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClassesService } from '../classes.service';
import { Shop } from '../classes/shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  @Input() public shopItem: Shop;
  @Input() public PreferedShop = false;
  public notHidden = true;
  @Output() messageEvent: EventEmitter<Shop> = new EventEmitter<Shop>();
  constructor() {

  }

  ngOnInit() {
  }
  public onLikeClicked(event: MouseEvent): void {
    console.log(event);
    this.sendShop();
    // this.refresh();
  }

  public onDisLikeClicked(event: MouseEvent): void {
    console.log(event);
    this.sendShop();
    // this.refresh();
  }
  public onRemoveClicked(event: MouseEvent): void {
    console.log(event);
    this.sendShop();
    // this.refresh();
  }
  public sendShop() {
    this.messageEvent.emit(this.shopItem);
  }
}

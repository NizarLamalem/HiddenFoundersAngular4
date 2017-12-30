import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../classes/shop';
import { ClassesService } from '../classes.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { PreferdshopsComponent } from '../preferdshops/preferdshops.component';

@Component({
  selector: 'app-shops-listing',
  templateUrl: './shops-listing.component.html',
  styleUrls: ['./shops-listing.component.css']
})
export class ShopsListingComponent implements OnInit {
  public shopsDisplay: Shop[]; // [];
  @Input() preferdshop: boolean;
  @Input() whichDataToGet: number;

  constructor(public data: ClassesService) {
  }

  ngOnInit() {
    console.log(this.whichDataToGet);
    // this.prepareDataToDisplay(this.data.getShopes(this.whichDataToGet));
    this.shopsDisplay = this.data.getShopes(this.whichDataToGet);
  }

  onMessageReceieve($event) {
    const itemShop = <Shop>$event;
    console.log('Message Received');
    const index = this.shopsDisplay.indexOf(itemShop);
    console.log(index);
    this.shopsDisplay.splice(index, 1);
  }
  /*
    private prepareDataToDisplay(shops: Shop[]): void {
      // Exp  13/4 ==> 3.x then we need another zxtra row for new Shop
      if (shops != null) {
        let shopTableLenght = toInteger(shops.length / 4);
        shopTableLenght < (shops.length / 4) ? shopTableLenght += 1 : shopTableLenght += 0;
        this.shopsDisplay = new Array(shopTableLenght);
        let indexOfTableOfThetables = 0;
        let indexSecondeTable = 0;
        for (let index = 0; index < shops.length; index++) {


          if (index === 0 || (index / 4) === 1) {
            if (index !== 0) {
              indexOfTableOfThetables++;
            }
            this.shopsDisplay[indexOfTableOfThetables] = new Array(shops.length - index > 4 ? 4 : shops.length - index);
            indexSecondeTable = 0;
          }
          this.shopsDisplay[indexOfTableOfThetables][indexSecondeTable] = shops[index];
          indexSecondeTable++;
        }
      }
    }*/

}

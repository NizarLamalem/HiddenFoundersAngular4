import { Injectable } from '@angular/core';
import { Location } from './classes/location';
import { Shop } from './classes/shop';
import { HttpClient } from '@angular/Common/http';
import { HttpParams } from '@angular/common/http';
import { User } from './classes/user';

@Injectable()
export class ClassesService {
  private static URL = 'http://localhost:8000/';
  public static AllShops = 0;
  public static CloseShops = 1;
  public static PreferedShops = 2;
  constructor(private http: HttpClient) {
  }
  // This Function Takes an Argument number if 0 bring all the shops if 1 bring only the close one if 2 bring the prefered ones
  public getShopes(option: number): Shop[] {

    switch (option) {
      case ClassesService.AllShops: // todo the All shops URL
        const shops: Shop[] = [
          new Shop('20', 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            , 'Nike', 'lamanizar12@gmail.com', 'Kenitra', new Location(20, 34)),
          new Shop('30', 'https://material.angular.io/assets/img/examples/shiba1.jpg'
            , 'Addidas', 'lamanizar12@gmail.com', 'Kenitra', new Location(20, 34)),
          new Shop('30', 'https://material.angular.io/assets/img/examples/shiba1.jpg'
            , 'Addidas', 'lamanizar12@gmail.com', 'Kenitra', new Location(20, 34)),
          new Shop('30', 'https://material.angular.io/assets/img/examples/shiba1.jpg'
            , 'Addidas', 'lamanizar12@gmail.com', 'Kenitra', new Location(20, 34)),
          new Shop('30', 'https://material.angular.io/assets/img/examples/shiba1.jpg'
            , 'Addidas', 'lamanizar12@gmail.com', 'Kenitra', new Location(20, 34))
        ];
        return shops;
      case ClassesService.CloseShops: this.sendGeoAttriAndGetShopsNearBy();
        return null;
      case ClassesService.PreferedShops: // todo the only The Prefered shops URL
        return null;
      default: // todo all the shops
    }


  }

  private getRequests(params?: HttpParams, spesificURL?: string): void {
    console.log('Geo is Here');
    // check if
    this.http.get<Shop>(ClassesService.URL.concat(spesificURL ? spesificURL : ''), { params } ? { params } : null).
      subscribe(Data => {
        console.log('Geo is Working');
        // todo Treatment Whene Shops are Got and Format The jason Reteurn on Shops
      },
    );
  }

  // check if GeoLocalisation is Allowed
  private isGeoAllowed() {
    return navigator.geolocation;
  }

  // Send The Geolocalisation Data to BackEnd
  private sendGeoAttriAndGetShopsNearBy() {
    if (this.isGeoAllowed() !== null) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const params = new HttpParams()
          .set('long', '' + position.coords.longitude)
          .set('lat', '' + position.coords.latitude);
        this.getRequests({ params }, '/nearByShops');
      });
    }
  }

}

import { Injectable } from '@angular/core';
import { Location } from './classes/location';
import { Shop } from './classes/shop';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { User } from './classes/user';

@Injectable()
export class ClassesService {
  private static URL = 'http://localhost:8000/';
  private static URL_Nearby = '/nearby';
  private static URL_Prefeard_Shop = '/preferedshop';
  public static CloseShops = 1;
  public static PreferedShops = 2;
  private shops: Shop[];
  constructor(private http: HttpClient) {
    this.shops = [
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
  }
  // This Function Takes an Argument number if 1 bring only the close one if 2 bring the prefered ones
  public getShopes(option: number): Shop[] {

    switch (option) {

      case ClassesService.CloseShops: this.sendGeoAttriAndGetShopsNearByAndShopsPrefered(ClassesService.URL_Nearby);
        console.log('CLose Shops');
        return this.shops;
      case ClassesService.PreferedShops: this.sendGeoAttriAndGetShopsNearByAndShopsPrefered(ClassesService.URL_Prefeard_Shop);
        console.log('Prefered Shops');
        return null;
    }


  }
  // Send The Request To The Server To Get The Shops For Both Prefered And NearBy
  private getRequests(params?: HttpParams, spesificURL?: string): void {
    console.log('Geo is Here');
    // check if
    this.http.get<Shop[]>(ClassesService.URL.concat(spesificURL ? spesificURL : ''), { params } ? { params } : null).
      subscribe(Data => {
        // todo Treatment Whene Shops are Got and Format The jason Reteurn on Shops
        this.shops = Data;
      },
    );
  }

  // check if GeoLocalisation is Allowed
  private isGeoAllowed() {
    return navigator.geolocation;
  }

  // Send The Geolocalisation Data to BackEnd
  private sendGeoAttriAndGetShopsNearByAndShopsPrefered(url: string) {
    if (this.isGeoAllowed() !== null) {
      navigator.geolocation.getCurrentPosition((position) => {
        const params = new HttpParams()
          .set('long', '' + position.coords.longitude)
          .set('lat', '' + position.coords.latitude);
        this.getRequests(params, url);
      });
    }
  }

}

import { Location } from './location';

export class Shop {


  constructor(private id: string, private picture: string,
    private name: string, private email: string,
    private city: string, private location: Location) {

  }

  get Name(): string {
    return this.name;
  }
  get Picture(): string {
    return this.picture;
  }
  get Id(): string {
    return this.id;
  }
  get Email(): string {
    return this.email;
  }
  get City() {
    return this.city;
  }

  get Location(): Location{
return this.location ;
  }


}


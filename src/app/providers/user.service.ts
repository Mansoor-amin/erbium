import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users = [{
  id: 1,
  first_name: "Marion",
  last_name: "Kebbell",
  role: "admin",
  email: "admin@erbium.com",
  gender: "Female",
  password: "admin"
}, {
  id: 2,
  first_name: "Nicholas",
  last_name: "Baroux",
  email: "transportmanager@erbium.com",
  gender: "Male",
  role: "tm",
  password: "1234"
}, {
  id: 3,
  first_name: "Gerald",
  last_name: "Bronger",
  email: "forkliftdriver@erbium.com",
  gender: "Male",
  role: "fd",
  password: "123456"
}];

tableData =[{
  primary_sid: 6,
  shipment_id: "025949005-9",
  car_owner: "Devan Furst",
  destination: "Philippines",
  allocation: "PH",
  ADR: "Poland",
  Departure: "PL",
  Arrivals: "MN",
  transport_id: "3405",
  process: 6
},{
  primary_sid: 7,
  shipment_id: "394292448-X",
  car_owner: "Bertina Dieton",
  destination: "Brazil",
  allocation: "BR",
  ADR: "Indonesia",
  Departure: "ID",
  Arrivals: "PT",
  transport_id: "8003",
  process: 7
},{
  primary_sid: 8,
  shipment_id: "101417936-X",
  car_owner: "Shepard Eusden",
  destination: "Sweden",
  allocation: "SE",
  ADR: "Czech Republic",
  Departure: "CZ",
  Arrivals: "DE",
  transport_id: "8711",
  process: 8
}, {
  primary_sid: 9,
  shipment_id: "916241681-2",
  car_owner: "Georgine Tottman",
  destination: "Indonesia",
  allocation: "ID",
  ADR: "Argentina",
  Departure: "AR",
  Arrivals: "BF",
  transport_id: "72",
  process: 9
},{
  primary_sid: 10,
  shipment_id: "257490813-9",
  car_owner: "Kliment Gouly",
  destination: "Brazil",
  allocation: "BR",
  ADR: "France",
  Departure: "FR",
  Arrivals: "CN",
  transport_id: "7481",
  process: 10
}]
  constructor() { }
  private user = {}; 
  
  setUser(user){
    this.user = user;
  }
  getUser(){
    return this.user;
  }
  
}

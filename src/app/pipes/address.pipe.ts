import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
  standalone: false
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = 
      !address ||
      !address.city ||
      !address.country ||
      !address.state ||
      !address.street ||
      !address.number === undefined ||
      !address.number === null;
    
    if (INVALID_ADDRESS) {
      return "Invalid Address";
    }
  
    return `${address.street}, ${address.number}, ${address.city} - ${address.state}`;
  }

}

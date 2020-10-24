import { Pipe, PipeTransform } from '@angular/core';
import { hardcodedValues } from './hardcodedValues';

@Pipe({
  name: 'constants'
})
export class ConstantsPipe implements PipeTransform {

  transform(value: any, args?: any): any{
    if(value in hardcodedValues) {
      return hardcodedValues[value];
    } else{
      console.error(
        'No constant found for given key'
      );
      return undefined;
    }
  }
}

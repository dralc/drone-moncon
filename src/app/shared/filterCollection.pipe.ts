import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCollection',
  pure: false
})
export class FilterCollectionPipe implements PipeTransform {

  /**
   * Filters an Array of Objects. Keeps the objects where the value at <key> starts with <match>
   * @returns A new Array of the kept objects
   */
  transform(inputAr: Array<Object>, match: string = '', key: string): Array<Object> {

    if ( !inputAr || inputAr.length === 0 || !match.trim() || !key ) {
      return inputAr;
    }

    const keepAr = [];
    const re = new RegExp(`^${match}`, 'i');

    for (const obj of inputAr) {
      if ( re.test(obj[key]) ) {
        keepAr.push(obj);
      }
    }

    return keepAr;
  }

}

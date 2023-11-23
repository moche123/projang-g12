import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAge'
})
export class SortAgePipe implements PipeTransform {

  transform(value: any) {
    return value.sort( (a:any,b:any) => a.age - b.age )
  }

}

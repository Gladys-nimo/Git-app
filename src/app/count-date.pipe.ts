import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDate'
})
export class CountDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/constants';

// Pipe é um recurso utilizado para formatar a exibição de valores corretamente, ou de acordo com a necessidade.
// Deve ser importado dentro do declarations do app.module.ts

@Pipe({
  name: 'DateTimePipe',
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATETIME_FMT);
  }
}

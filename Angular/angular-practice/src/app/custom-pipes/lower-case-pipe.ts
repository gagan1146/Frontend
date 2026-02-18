import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'lowerCasePipe'
})
export class LowerCasePipe implements PipeTransform {
  transform(value: any) {
    return value.toLowerCase();
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'UpperCasePipe'
})
export class UpperCasePipe implements PipeTransform{
    transform(value: any) {
        return value.toUpperCase();
    }
}
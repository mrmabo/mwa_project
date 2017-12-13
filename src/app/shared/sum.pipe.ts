import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";


@Pipe({
    name: 'sumpipe'
})
export class sumPipe implements PipeTransform{
    transform(value: number[]){
        if(!value){
            return null;
        }

        let sum = 0;

        for(let i = 0; i < value.length; i++){
            sum += value[i];
        }

        return sum;
    }
}
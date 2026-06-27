import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class CarService
{
    constructor(){}
    private carNamesSubject=new BehaviorSubject<string[]>([])
    carNames$ = this.carNamesSubject.asObservable();
    addCarName(name : string)
    {
        //Will added to list component
        const currentNames=this.carNamesSubject.getValue()
        const updatedNames=[...currentNames,name]
        this.carNamesSubject.next(updatedNames)
    }
}

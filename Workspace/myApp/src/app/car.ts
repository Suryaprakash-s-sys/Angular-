import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class CarService
{
    constructor()
    {}

    private addCarNamesubject=new BehaviorSubject<string[]>([]);
    carNames$=this.addCarNamesubject.asObservable();

    addCarName(name : string)
    {
        const currentNames=this.addCarNamesubject.getValue();
        const updatedNames=[...currentNames,name]
        this.addCarNamesubject.next(updatedNames);
    }
}

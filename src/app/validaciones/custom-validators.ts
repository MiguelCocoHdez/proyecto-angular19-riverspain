import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { VoluntariosService } from "@app/services/voluntarios.service";
import { catchError, map, of } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class CustomValidators {
    
    constructor(private voluntariosService: VoluntariosService) {}

    numeroVoluntarioExiste(): AsyncValidatorFn {
        return (control: AbstractControl) => {
            const numero = control.value

            if(!numero) return of(null)

            return this.voluntariosService.verVoluntarioNum(numero).pipe(
                map(voluntario => voluntario ? null : { numeroNoExiste: true }),
                catchError(() => of({ numeroNoExiste: true }))
            )
        }
    }

    dniExiste(): AsyncValidatorFn {
        return (control: AbstractControl) => {
            const dni = control.value

            if (!dni) return of(null)

            return this.voluntariosService.verVoluntarios().pipe(
                map(voluntarios =>
                    voluntarios.some(voluntario => voluntario.dni === dni) ? { dniExiste: true } : null
                ),
                catchError(() => of(null))
            );
        };
    }
}
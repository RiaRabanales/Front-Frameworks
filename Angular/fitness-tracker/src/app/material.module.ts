import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";

const MAT_MODULES = [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
];

@NgModule({
    //imports: MAT_MODULES, los módulos se importan implícitamente
    exports: MAT_MODULES
})

export class MaterialModule {}
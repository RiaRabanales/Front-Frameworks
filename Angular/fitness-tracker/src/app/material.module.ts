import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MAT_MODULES = [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    //imports: MAT_MODULES, los módulos se importan implícitamente
    exports: MAT_MODULES
})

export class MaterialModule {}
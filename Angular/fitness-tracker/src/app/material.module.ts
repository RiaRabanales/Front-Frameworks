import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';

const MAT_MODULES = [
    MatButtonModule,
    MatIconModule
];

@NgModule({
    //imports: MAT_MODULES, los módulos se importan implícitamente
    exports: MAT_MODULES
})

export class MaterialModule {}
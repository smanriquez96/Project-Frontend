import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class ComponentsModule { }

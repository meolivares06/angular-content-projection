import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './my-layout/skeleton.component';
import { MainComponent } from './my-layout/main.component';
import { SouthComponent } from './my-layout/south.component';
import { SearchComponent } from './my-layout/search.component';
import { RightComponent } from './my-layout/right.component';
import { MyLayoutComponent } from './my-layout/my-layout.component';

@NgModule({
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        LayoutModule,
        IconsModule,
        InputsModule,
        ButtonsModule
    ],
    declarations: [AppComponent, SkeletonComponent, MainComponent, SouthComponent, SearchComponent, RightComponent, MyLayoutComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatTableModule,
        ScrollingModule,
        MatTabsModule,
        MatTreeModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSlideToggleModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatTableModule,
        ScrollingModule,
        MatTabsModule,
        MatTreeModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSlideToggleModule
    ]
})

export class MaterialModule { }

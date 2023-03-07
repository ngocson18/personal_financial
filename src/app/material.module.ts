import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatTableModule,
        ScrollingModule,
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatTableModule,
        ScrollingModule,
    ]
})

export class MaterialModule { }

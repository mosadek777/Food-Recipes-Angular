import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatDividerModule, MatIconModule
  ],
  declarations: [SharedComponent],
  exports: [
    MatButtonModule, MatDividerModule, MatIconModule
  ]
})
export class SharedModule { }

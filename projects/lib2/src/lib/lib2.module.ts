import { NgModule } from '@angular/core';
import { LibModule } from 'lib';

import { Lib2Component } from './lib2.component';

@NgModule({
  imports: [
    LibModule
  ],
  declarations: [Lib2Component],
  exports: [Lib2Component]
})
export class Lib2Module { }

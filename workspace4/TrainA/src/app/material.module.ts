import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatTabsModule, MatGridListModule
} from '@angular/material';
@NgModule({
  imports: [MatButtonModule, MatCardModule, MatTabsModule, MatGridListModule],
  exports: [MatButtonModule, MatCardModule, MatTabsModule, MatGridListModule],
})
export class MaterialModule {
}

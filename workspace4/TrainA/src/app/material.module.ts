import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule , MatCardModule, MatToolbarModule , MatTabsModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule , MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule , MatTabsModule],
})
export class MaterialModule {
}

import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
    imports: [
      PipesModule,
      FormsModule,
      CommonModule,
      AngularMaterialModule
    ],
    exports: [
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent
    ]
})
export class ComponentsModule {

}
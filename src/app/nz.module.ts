import { NgModule } from '@angular/core';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    NzGridModule,
    NzTypographyModule,
    NzCardModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule
  ],
  exports: [
    HttpClientModule,
    NzGridModule,
    NzTypographyModule,
    NzCardModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule
  ],
})
export class NzModule { }

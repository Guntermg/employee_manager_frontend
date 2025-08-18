import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EmployeeService } from "./employee.service";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:
    [
      BrowserModule
    ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { style } from "@angular/animations";
import { preserveWhitespacesDefault } from "@angular/compiler";
import { Component, Output } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  count: boolean = false;
  // styles: ["{background-color: black}"];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.unshift(firedNumber);
    } else {
      this.oddNumbers.unshift(firedNumber);
    }
    if (this.oddNumbers.indexOf(firedNumber) === 0) {
      this.count = true;
      console.log("yes");
    }
  }
}

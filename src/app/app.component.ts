import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Dean's Discount Calculator";
  finalPrice;
  result;

  // tslint:disable-next-line: typedef
  calculate(price: number, discount: number){
    if(!price || !discount){
      this.result = "Error: Please fill out both fields"
    }
    else if(discount > 100 || discount < 0){
      this.result = "Error: Your discount must be between 0 and 100%"
    }
    else if(price < 0){
      this.result = "Error: You cannot have a negative number for the price"
    }
    else{
    let savings = (price * (discount / 100));
    this.finalPrice = price - savings;
    if(Number.isNaN(this.finalPrice) || Number.isNaN(savings)){
      this.result = "Error: Please make sure you are inputting numbers";
    }
    else{
    this.result = "Your final price is: $" + this.finalPrice +
    "\n, you are saving $" + savings + "!";
    }
    }
  }
}

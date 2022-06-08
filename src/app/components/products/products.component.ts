import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Pipe } from '@angular/core';
import { catchError, Observable, of, startWith, map, filter } from 'rxjs';
import { Item } from 'src/app/model/item';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$: Product[] | null = null;
  items$: Item[] | null = null;
  dateSalat!: string[];
  today = new Date();
  //sous modele items de l api
  dateApi!: any;
  constructor(
    private productsService: ProductsService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.dateApi = this.datepipe.transform(this.today, 'yyyy-M-d');
    this.getAllProducts() 
  }
  getAllProducts() {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products$ = data;
       ([this.items$] = data.map((x) => x.items));
       console.log([...this.items$].map(x=>x.date_for))
       console.log('Today is:'+this.dateApi);

    });
  }



//***************************************************************************************************************************** */




  //   getProductsByToday() {

  //     this.productsService.getAllProducts().subscribe((data) => {
  //       this.products$ = data;
  //     [this.items$] = data.map((x) => x.items);

  //     //  this.dateSalat = [...this.items$].map((x) => x.date_for);

  // //   console.log(this.dateSalat.filter((x) => x == this.dateApi)[0]);
  //    //   console.log(this.dateApi);
  //    });

  //   }
}

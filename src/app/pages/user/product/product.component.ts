import { ProductService } from './../../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

  prodList : any[] = [];
  
  constructor(   
    private $prodService : ProductService   
    ){ 
      
    }

    
    ngOnInit(){           
      this.getAllProd();      
    }
    
    getAllProd(){  
      this.$prodService.getAll().subscribe(
        data => this.prodList=data
      );      
    }

    handleEditEvent(id: number) {
      console.log(id, this.prodList.find(it => it.id == id))
    }

    handleRemoveEvent(id: number) {
      const findIndex = this.prodList.findIndex(it => it.id == id)

      this.prodList.splice(findIndex, 1)

      this.$prodService.delete(id).subscribe((item: any) => console.log(`Item removed(${item})`))
    }
}

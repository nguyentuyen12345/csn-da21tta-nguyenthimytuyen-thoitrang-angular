import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-aosomi',
  templateUrl: './aosomi.component.html',
  styleUrls: ['./aosomi.component.css']
})
export class AosomiComponent {
  
  listAO:any;
  constructor( private h: HttpClient ){
    var url="  http://localhost:3000/posts";
    this.h.get(url).subscribe(res =>{this.listAO = res;console.log(res);})
  }
}

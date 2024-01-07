import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-danhsachsanpham',
  templateUrl: './danhsachsanpham.component.html',
  styleUrls: ['./danhsachsanpham.component.css']
})
export class DanhsachsanphamComponent {
  listSP:any;
 constructor(private h : HttpClient){
  var url="http://localhost:3000/loaisanpham";
  this.h.get(url).subscribe(res => {this.listSP = res;console.log(res); })
 }
}

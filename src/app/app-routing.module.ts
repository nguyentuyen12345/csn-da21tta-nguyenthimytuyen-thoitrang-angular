
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { PhukienComponent } from './phukien/phukien.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { AosomiComponent } from './aosomi/aosomi.component';
import { AothunComponent } from './aothun/aothun.component';
import { QuannamComponent } from './quannam/quannam.component';
import { DamvavayComponent } from './damvavay/damvavay.component';
import { QuannuComponent } from './quannu/quannu.component';
import { SetdonuComponent } from './setdonu/setdonu.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { SanphamchitietComponent } from './sanphamchitiet/sanphamchitiet.component';
import { PhukiennuComponent } from './phukiennu/phukiennu.component';

const routes: Routes = [

  {path: "", component: HomeComponent },
  {path:'home',component:HomeComponent},
 {path:'thoitrangnam',component:DanhsachsanphamComponent},
{path:'phukien',component:PhukienComponent},
{path:'taikhoan',component:TaikhoanComponent},
{path:'thoitrangnu',component:DanhsachsanphamComponent},
 {path:'dangky',component:DangkyComponent},
 {path:'dangnhap',component:DangnhapComponent},
 {path:'lienhe',component:LienheComponent},
 {path:'aosomi',component:AosomiComponent},
 {path:'aothun',component:AothunComponent},
 {path:'quannam',component:QuannamComponent},
 {path:'damvavay',component:DamvavayComponent},
 {path:'quannu',component:QuannuComponent},
 {path:'setdonu',component:SetdonuComponent},
 {path:'quenmatkhau',component:QuenmatkhauComponent},
{path:'trangchu',component:TrangchuComponent},
{path:'sanpham/:id',component:SanphamchitietComponent},
{path:'phukiennam',component:PhukienComponent},
{path:'phukiennu',component:PhukiennuComponent},
  {
    path: 'products',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: "sale",
    component: SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


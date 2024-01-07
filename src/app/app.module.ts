import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GiohangComponent } from './giohang/giohang.component';
import { SanphammoiComponent } from './sanphammoi/sanphammoi.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { ThoitrangnamComponent } from './thoitrangnam/thoitrangnam.component';
import { ThoitrangnuComponent } from './thoitrangnu/thoitrangnu.component';
import { PhukienComponent } from './phukien/phukien.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { AosomiComponent } from './aosomi/aosomi.component';
import { QuannamComponent } from './quannam/quannam.component';
import { AothunComponent } from './aothun/aothun.component';
import { SetdonuComponent } from './setdonu/setdonu.component';
import { DamvavayComponent } from './damvavay/damvavay.component';
import { QuannuComponent } from './quannu/quannu.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ThoitrangComponent } from './thoitrang/thoitrang.component';
import { SanphamchitietComponent } from './sanphamchitiet/sanphamchitiet.component';
import { PhukiennuComponent } from './phukiennu/phukiennu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SaleComponent,
    DanhsachsanphamComponent,
    DangkyComponent,
    DangnhapComponent,
    LienheComponent,
    GiohangComponent,
    SanphammoiComponent,
    TaikhoanComponent,
    ThoitrangnamComponent,
    ThoitrangnuComponent,
    PhukienComponent,
    QuenmatkhauComponent,
    AosomiComponent,
    QuannamComponent,
    AothunComponent,
    SetdonuComponent,
    DamvavayComponent,
    QuannuComponent,
    TrangchuComponent,
    ThoitrangComponent,
    SanphamchitietComponent,
    PhukiennuComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sanphamchitiet',
  templateUrl: './sanphamchitiet.component.html',
  styleUrls: ['./sanphamchitiet.component.css']
})
export class SanphamchitietComponent {
id: any;
product: any;
constructor(private app:AppModule,private activedRouter:ActivatedRoute ){}
ngOnInit(): void{
this.activedRouter.paramMap.subscribe((query:any) => {
  this.id = query.get('id');
  alert(this.id)
})
}
}

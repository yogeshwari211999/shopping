import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  responsiveOptions: any[] =[];
  banners:any[]=[] ;
  noWrapSlides = false;
  showIndicator = true;
  subCategories: any[]=[];
  products:any[]=[];


  ngOnInit() {
  this.banners=[
    {
      image:'../../assets/images/COVID_web banner-03.jpg'
    },
    {
      image:'../../assets/images/electronics offer-04.jpg'
    },
    {
      image:'../../assets/images/explora_web banner-02.jpg'
    },
    {
      image:'../../assets/images/groceries-04.jpg'
    },
    {
      image:'../../assets/images/homecare-06-06.jpg'
    },
  ]

  this.subCategories=[
    {
      image:'../../assets/images/sub-category/d_p.jpg'
    },
    {
      image:'../../assets/images/sub-category/Group 357.jpg'
    },
    {
      image:'../../assets/images/sub-category/M_S.jpg'
    }
  ]
  this.products=[
    {
      image:'../../assets/images/sub-category/dals.png'
    },
    {
      image:'../../assets/images/sub-category/f_v.png'
    },
    {
      image:'../../assets/images/sub-category/oils.png'
    },
    {
      image:'../../assets/images/sub-category/riceproducts.png'
    },
    {
      image:'../../assets/images/sub-category/milkproducts.png'
    },
    {
      image:'../../assets/images/sub-category/masala.png'
    }
  ]
}  
}






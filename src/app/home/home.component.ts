import { Component, } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
   
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:[ './home.component.css']
  
})

export class HomeComponent {
  
  title = 'ng-carousel-demo';


  photos =[
    {title:'first',short:'slide short', src:"../../assets/images/TRA.png"},
    
    {title:'first',short:'slide short', src:"../../assets/images/taa-tanzania-airports-authority.jpg"},

    {title:'first',short:'slide short', src:"../../assets/images/Logo-crdb-bank-tanzania-clipart-PNG.png"},

    {title:'first',short:'slide short', src:"../../assets/images/NMBLogo1.png"},

    {title:'first',short:'slide short', src:"../../assets/images/bugando.jpeg"},

    {title:'first',short:'slide short', src:"../../assets/images/large-1563370578-tmda_logo_transparent_bk.png"}

];
  
  pictures =[
  {title:'first',short:'slide short', src:"../../assets/images/taa-tanzania-airports-authority.jpg"},
  
  {title:'first',short:'slide short', src:"../../assets/images/Logo-crdb-bank-tanzania-clipart-PNG.png"},

  {title:'first',short:'slide short', src:"../../assets/images/NMBLogo1.png"},

  {title:'first',short:'slide short', src:"../../assets/images/oryx-energies-vector-logo.png"},

  {title:'first',short:'slide short', src:"../../assets/images/large-1563370578-tmda_logo_transparent_bk.png"},

 

];

   
logos =[
  {title:'first',short:'slide short', src:"../../assets/images/Logo-crdb-bank-tanzania-clipart-PNG.png"},
  
  {title:'first',short:'slide short', src:"../../assets/images/necta_logo-01.png"},

  {title:'first',short:'slide short', src:"../../assets/images/oryx-energies-vector-logo.png"},

  {title:'first',short:'slide short', src:"../../assets/images/immigration.jpeg"},

  {title:'first',short:'slide short', src:"../../assets/images/large-1563370578-tmda_logo_transparent_bk.png"},

  

];
 
   
clients =[
  {title:'first',short:'slide short', src:"../../assets/images/NMBLogo1.png"},
  
  {title:'first',short:'slide short', src:"../../assets/images/oryx-energies-vector-logo.png"},

  {title:'first',short:'slide short', src:"../../assets/images/large-1563370578-tmda_logo_transparent_bk.png"},


];

   
 banners =[
  {title:'first',short:'slide short', src:"../../assets/images/oryx-energies-vector-logo.png"},
  
  {title:'first',short:'slide short', src:"../../assets/images/large-1563370578-tmda_logo_transparent_bk.png"},

  

];

  bangos =[
  {title:'first',short:'slide short', src:"../../assets/images/large-1563370578-tmda_logo_transparent_bk.png"},
  
  {title:'first',short:'slide short', src:"../../assets/images/taa-tanzania-airports-authority.jpg"},

  {title:'first',short:'slide short', src:"../../assets/images/Logo-crdb-bank-tanzania-clipart-PNG.png"},

  {title:'first',short:'slide short', src:"../../assets/images/NMBLogo1.png"},

  {title:'first',short:'slide short', src:"../../assets/images/oryx-energies-vector-logo.png"},

  {title:'first',short:'slide short', src:"../../assets/images/BOT.png"}

];

  constructor(config: NgbCarouselConfig) {

    config.interval = 2000;

    config.keyboard = true;

    config.pauseOnHover = true;

    config.showNavigationArrows = false;
		config.showNavigationIndicators = false;

  }

}


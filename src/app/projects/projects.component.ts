import { Component } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProjectsComponent {
  title = 'ng-carousel-demo';

  

  images = [

    {title: 'First Slide', short: 'First Slide Short', src: "../../assets/images/proectsc3.png"},

    {title: 'Second Slide', short: 'Second Slide Short', src: "../../assets/images/projectson.png"},

    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/images/projectsc5.png"},

    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/images/projectc4.png"},

    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/images/projectsc2.png"}
    
];

  photos =[
    {title:'first',short:'slide short', src:"../../assets/images/TRA.png"},
    
    {title:'first',short:'slide short', src:"../../assets/images/bugando.jpeg"},

];
  
  pictures =[
  {title:'first',short:'slide short', src:"../../assets/images/taa-tanzania-airports-authority.jpg"},
  
  {title:'first',short:'slide short', src:"../../assets/images/institution_logo-1.png"},



 

];

   
logos =[
  {title:'first',short:'slide short', src:"../../assets/images/Logo-crdb-bank-tanzania-clipart-PNG.png"},
  


  {title:'first',short:'slide short', src:"../../assets/images/immigration.jpeg"},



  

];
 
   
clients =[
  {title:'first',short:'slide short', src:"../../assets/images/NMBLogo1.png"},
  
  {title:'first',short:'slide short', src:"../../assets/images/necta_logo-01.png"},


];

   
 banners =[
  {title:'first',short:'slide short', src:"../../assets/images/oryx-energies-vector-logo.png"},
  
  {title:'first',short:'slide short', src:"../../assets/images/BOT.png"},

  

];

  bangos =[
  {title:'first',short:'slide short', src:"../../assets/images/large-1563370578-tmda_logo_transparent_bk.png"},
  
  {title:'first',short:'slide short', src:"../../assets/images/fire.png"}

];

  constructor(config: NgbCarouselConfig) {

    config.interval = 2000;

    config.keyboard = true;

    config.pauseOnHover = true;

    config.showNavigationArrows = false;
		config.showNavigationIndicators = false;

  }
}

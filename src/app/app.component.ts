import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recommendations';
  recommendations: any = {}
  recommendations2: any = {}
  recommendations2b: any = {}
  generics: any={}
  images2: string[] = []
  responsiveOptions: any

  images = [
    { title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500" },
    { title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500" },
    { title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500" }
  ];
  constructor(private data: DataService) {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    console.log('ngInit')
    // this.data.getRecommendationsProxy().subscribe(
    //   data => {
    //     this.recommendations = data
    //     let resources: any[] = this.recommendations.resources
    //     for (let i = 0; i < resources.length; i++) {
    //       this.setImageUrl(resources[i])
    //     }
    //   }
    // )

    // this.data.getRecommendationsProxy2().subscribe(
    //   data => {
    //     this.recommendations2 = data
    //     let resources: any[] = this.recommendations.resources
    //     for (let i = 0; i < resources.length; i++) {
    //       this.setImageUrl(resources[i])
    //     }
    //   }
    // )

    // this.data.getRecommendationsProxy2b().subscribe(
    //   data => {
    //     this.recommendations2b = data
    //     let resources: any[] = this.recommendations.resources
    //     for (let i = 0; i < resources.length; i++) {
    //       this.setImageUrl(resources[i])
    //     }
    //   }
    // )

    this.data.getGenerics().subscribe(
      data => {
        this.generics = data
        let resources: any[] = this.generics.resources
        for (let i = 0; i < resources.length; i++) {
          this.setImageUrl(resources[i])
        }
      }
    )
  }

  getImageUrl(resource: any) {
    let url = resource.images[0].imageUrl
    console.log("b:"+url)
    url = url.replace("https://", "")
    let splits: string[] = url.split("/")
    let path = ""
    for (var i = 1; i < splits.length; i++) {
      path = path + splits[i] + "/"
    }
    url = "https://dfwfis-sponsored.secure.footprint.net/catalog/image/imageserver/v1/service/" + path
    console.log("a:"+url)
    return url;
  }

  setImageUrl(resource: any) {
   //return resource;

    let url = resource.images[0].imageUrl
        console.log("b:"+url)
        if (url) {
    url = url.replace("https://api-dev.aeg.cloud/catalog/image/imageserver/service", "")
    let splits: string[] = url.split("/")
    let path = ""
    for (var i = 1; i < splits.length; i++) {
      path = path + splits[i] + "/"
    }
    url = "https://dfwfis-sponsored.secure.footprint.net/catalog/image/imageserver/v1/service/" + path
    console.log("a:"+url)
    resource.images[0].imageUrl = url
  }
  }

  getImages() {
    let paths = []
    for (let j = 1; j < this.recommendations.resources.length; j++) {
      let resource = this.recommendations.resources[j]
      let url = resource.images[0].imageUrl
      url = url.replace("https://", "")
      let splits: string[] = url.split("/")
      let path = ""
      for (let i = 1; i < splits.length; i++) {
        path = path + splits[i] + "/"
      }
      paths.push("https://dfwfis-sponsored.secure.footprint.net/catalog/image/imageserver/v1/service/" + path)
    }

    return paths
  }

  getLocalTime(isodate: string) {
    let isotime = new Date(isodate)
    
    return this.formatDate(isotime)
  }

  formatDate(preformatDate: Date) {
    var hours = preformatDate.getHours();
    var minutes = preformatDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var minutesText = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutesText + ' ' + ampm;
    return strTime;
  }


}



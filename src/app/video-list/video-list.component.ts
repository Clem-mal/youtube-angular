import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { Video } from '../models/videoYoutube.models';
import { videoYoutube } from '../models/video.models';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnChanges {

public nadal: videoYoutube = new videoYoutube
    ("/assets/img/nadal.jpeg",
    "NADAL LA DEUXIEME LEGENDE",
    "Nadal",
    454545,
    true,);

public Luffy: videoYoutube =  new videoYoutube
    ("/assets/img/luffy.jpeg",
    "MEILLEUR ANIMEE",
     "Luffy",
     454545,
     false);

public zidane: videoYoutube =  new videoYoutube
     ("/assets/img/zidane.jpeg",
     "ZIDANE LA LEGENDE",
      "Zinedine Zidane",
      4545,
      true);

public js: videoYoutube =  new videoYoutube
     ("/assets/img/js.png",
      " JAVA SCRIPT C'EST TROP BIEN",
      "Java Script",
      5454545,
      false);

public echec: videoYoutube =  new videoYoutube
     ("/assets/img/echec.jpeg",
     "LES ECHECS C EST OUF",
      "Echec & mat",
      1004453,
      true);

public walterwhite: videoYoutube =  new videoYoutube
    ("/assets/img/walterwhite.jpeg",
    "BREAKING BAD BEST SERIES EVER",
     "Breaking Bad",
     23454824,
     true);

public rugby: videoYoutube =  new videoYoutube
     ("/assets/img/rugby.jpeg",
     "TOULOUSE MEILLEUR EQUIPE",
      "Rugby winner",
      23242,
      false);

public  hooper :videoYoutube =  new videoYoutube
       ("/assets/img/hooper.jpeg",
      "LE GROS OURS",
      "hooper",
      12453,
      true);

public  padawam :videoYoutube =  new videoYoutube
      ("/assets/img/padawam.jpeg",
        "METAL GEAR SOLID ",
        "Padawam",
        2324,
        false);

public  orelsan :videoYoutube =  new videoYoutube
       ("/assets/img/orelsan.jpeg",
        "LA QUETE",
        "Orelsan",
        1245532,
        false);

     arrayListYoutube = [this.orelsan, this. padawam,this.nadal, this.Luffy, this.walterwhite, this.rugby, this.echec, this.js, this.zidane, this.hooper];

     youtubeSearchList = [...this.arrayListYoutube];

  constructor() { }

  @Input() userInputChild!: string

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
  this.search()
}


search(){
const newTableau = this.arrayListYoutube.filter(video => video.title.toLowerCase().includes(this.userInputChild.toLowerCase() ))
this.youtubeSearchList = newTableau
}


  onReceiveNewSearch($event: string) {
    console.log($event)

  }
}


import { Component, Input, OnInit } from '@angular/core';
import { videoYoutube } from '../models/video.models';
@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {


@Input()
video: videoYoutube = new videoYoutube ("", "", "", 0,true);
constructor () {}



  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {Pong, PingService} from 'src/app/services/ping.service';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.less']
})
export class PingComponent implements OnInit {
  pong: Pong;

  constructor(
    private pingService: PingService
  ) {
  }

  ngOnInit() {
    this.getPong();
  }

  getPong(): void {
    this.pingService.getPong()
      .subscribe(pong => this.pong = pong);
  }

}

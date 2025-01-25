import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus : 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor(){ }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5){
        this.currentStatus = 'offline';
      } else if (rnd < 0.9) {
        this.currentStatus = 'online';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 2000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}

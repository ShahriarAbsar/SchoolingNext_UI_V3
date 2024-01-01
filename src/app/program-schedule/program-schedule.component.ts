import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-program-schedule',
  templateUrl: './program-schedule.component.html',
  styleUrls: ['./program-schedule.component.scss']
})
export class ProgramScheduleComponent implements OnInit {
  headline: string = 'Coming soon';
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initializeCountdown();
  }

  private initializeCountdown(): void {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const countDown = new Date('04/05/2024').getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      this.days = Math.floor(distance / day);
      this.hours = Math.floor((distance % day) / hour);
      this.minutes = Math.floor((distance % hour) / minute);
      this.seconds = Math.floor((distance % minute) / second);

      // Manually trigger change detection
      this.cdr.detectChanges();

      // do something later when date is reached
      if (distance < 0) {
        this.headline = "It's here!";
        clearInterval(x);
      }
    }, 1000); // Update every second
  }
}

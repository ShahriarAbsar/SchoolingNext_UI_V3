import { Component } from '@angular/core';

@Component({
  selector: 'app-participatory-event',
  templateUrl: './participatory-event.component.html',
  styleUrls: ['./participatory-event.component.scss']
})
export class ParticipatoryEventComponent {

  isBox1Visible = true;
  isBox2Visible = false;

  istxt1Visible = true;
  istxt2Visible = false;

  isImageMoved = false;
  isDown = false;

  isRotated = false;

  toggleImageMovement() {
    this.isImageMoved = !this.isImageMoved;
    this.isDown = !this.isDown;
    this.toggleBoxVisibility();
    this.toggleTextVisibility();
    this.isRotated = !this.isRotated;
  }

  private toggleBoxVisibility() {
    this.isBox1Visible = !this.isBox1Visible;
    this.isBox2Visible = !this.isBox2Visible;
  }

  private toggleTextVisibility() {
    this.istxt1Visible = !this.istxt1Visible;
    this.istxt2Visible = !this.istxt2Visible;
  }


  

  toggleRotation() {
    
  }
}

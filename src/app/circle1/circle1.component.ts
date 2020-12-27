import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Circle } from '../circle';

@Component({
  selector: 'app-circle1',
  templateUrl: './circle1.component.html',
  styleUrls: ['./circle1.component.css']
})
export class Circle1Component implements OnInit {
circleVisible:boolean = true

  circles:Circle[] = [
    {colors_array: [20,60,50],
    colors_string: this.getRGBColorString([20,60,50])},
    {colors_array: [200,60,0],
    colors_string: this.getRGBColorString([200,60,0])},
    {colors_array: [0,0,0],
      colors_string: this.getRGBColorString([200,200,200])}
  ]


  getNewColorRGB(circle:Circle) : void {
    let newCol = this.getRandomColorRGB()
    let otherCol = this.circles[0] === circle ? this.circles[1].colors_array : this.circles[0].colors_array

    while (newCol === otherCol)
    {
      console.log("got new col")
      newCol = this.getRandomColorRGB()
    }

    circle.colors_array = newCol

    circle.colors_string = this.getRGBColorString(newCol)
  }

  getRGBColorString(input:number[]) {
    let returnV = "rgb("
    return returnV.concat(input[0].toString() + "," + input[1].toString() + "," + input[2].toString() + ")")
  }

  showCircles()
  {
    this.circleVisible = true
  }

  showSquare()
  {
    this.circleVisible = false;
    this.mixColors(this.circles[2])
  }

  getRandomColorRGB()
  {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return [r,g,b]
  }

  mixColors(circle:Circle) {
    let col1 = this.circles[0].colors_array
    let col2 = this.circles[1].colors_array

    let r = Math.floor((col1[0] + col2[0])/2)
    let g = Math.floor((col1[1] + col2[1])/2)
    let b = Math.floor((col1[2] + col2[2])/2)

    circle.colors_array = [r,g,b]
    circle.colors_string = this.getRGBColorString(circle.colors_array)

    return
  }

  getAllCircles() {

  }
  


  ngOnInit() {
  
  }

}

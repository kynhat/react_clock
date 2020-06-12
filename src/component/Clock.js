import React from 'react';
import {drawClock} from './Function/drawClock';
export default class Clock extends React.Component {

    static defaultProps = {
      size: 100, 
      bgColor: "#ffffff",
      borderColor: "#555ddd",
      timeoffset: 0,
      indicateColor: "#555ddd",
      dialColorHour: "#555ddd",
      dialColorMinute: "#555ddd",
      dialColorSecond: "#555ddd",
      showBorder: true,
      showHourText: true,
      showSecondText: true,
      showMinuteText: true,
      time24h: true,
      timeTextColor: "#333333",
      dateTextColor: "#333333",
      dialFontSize: 20,
      dateTextSize: 20,
      timeFormat: "hmy12",
      dateFormat: "mmddDay",
    }
    componentDidMount() {
      var { id } = this.props;
      var canvasObj = document.getElementById(`automaticClock${id}`);
      var ctx = canvasObj.getContext("2d");
     
      var radius = canvasObj.height / 2;
      ctx.translate(radius, radius);
       this.radius = radius * 0.90;
      drawClock(ctx, radius);
      // setInterval(drawClock, 1000);
    }
  render() {
    const { id } = this.props;
    return (
      

      <canvas id={`automaticClock${id}`} width={200} height={200} />
    
    )




  }
}


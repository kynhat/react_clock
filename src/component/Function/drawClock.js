import { drawFace,drawNumbers,drawTime } from './accessory';

export var drawClock = (ctx, radius) => {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
  setTimeout(() => drawClock(ctx, radius), 50);
}
import emptyFunction from './utils/emptyFunction';
import normalizeWheel from './utils/normalizeWheel';
import requestAnimationFramePolyfill from './requestAnimationFramePolyfill';

class WheelHandler {
  animationFrameID = null;
  deltaX = 0;
  deltaY = 0;
  handleScrollX = null;
  handleScrollY = null;
  stopPropagation = null;
  onWheelCallback = null;

  constructor(onWheel, handleScrollX, handleScrollY, stopPropagation) {
    this.didWheel = this.didWheel.bind(this);

    if (typeof handleScrollX !== 'function') {
      handleScrollX = handleScrollX
        ? emptyFunction.thatReturnsTrue
        : emptyFunction.thatReturnsFalse;
    }

    if (typeof handleScrollY !== 'function') {
      handleScrollY = handleScrollY
        ? emptyFunction.thatReturnsTrue
        : emptyFunction.thatReturnsFalse;
    }

    if (typeof stopPropagation !== 'function') {
      stopPropagation = stopPropagation
        ? emptyFunction.thatReturnsTrue
        : emptyFunction.thatReturnsFalse;
    }

    this.handleScrollX = handleScrollX;
    this.handleScrollY = handleScrollY;
    this.stopPropagation = stopPropagation;
    this.onWheelCallback = onWheel;
    this.onWheel = this.onWheel.bind(this);
  }

  onWheel(event) {
    const normalizedEvent = normalizeWheel(event);
    const deltaX = this.deltaX + normalizedEvent.pixelX;
    const deltaY = this.deltaY + normalizedEvent.pixelY;
    const handleScrollX = this.handleScrollX(deltaX, deltaY);
    const handleScrollY = this.handleScrollY(deltaY, deltaX);
    if (!handleScrollX && !handleScrollY) {
      return;
    }

    this.deltaX += handleScrollX ? normalizedEvent.pixelX : 0;
    this.deltaY += handleScrollY ? normalizedEvent.pixelY : 0;
    event.preventDefault();

    let changed;
    if (this.deltaX !== 0 || this.deltaY !== 0) {
      if (this.stopPropagation()) {
        event.stopPropagation();
      }
      changed = true;
    }

    if (changed === true && this.animationFrameID === null) {
      this.animationFrameID = requestAnimationFramePolyfill(this.didWheel);
    }
  }

  didWheel() {
    this.animationFrameID = null;
    this.onWheelCallback(this.deltaX, this.deltaY);
    this.deltaX = 0;
    this.deltaY = 0;
  }
}

export default WheelHandler;

interface Inputs {
    targetPosition: number;
    initialPosition: number;
    duration: number;
}

const pow = Math.pow;

// The easing function that makes the scroll decelerate over time
function easeOutQuart(x: number) {
 return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export function animateScroll({ targetPosition, initialPosition, duration }: Inputs) {
 let start: undefined | number;
 let position: number;
 let animationFrame: number;

 const requestAnimationFrame = window.requestAnimationFrame;
 const cancelAnimationFrame = window.cancelAnimationFrame;

 // maximum amount of pixels we can scroll
 const maxAvailableScroll =
   document.documentElement.scrollHeight -
   document.documentElement.clientHeight;

 const amountOfPixelsToScroll = initialPosition - targetPosition;

 function step(timestamp: number) {
   if (start === undefined) {
     start = timestamp;
   }

   const elapsed = timestamp - start;

   // this just gives us a number between 0 (start) and 1 (end)
   const relativeProgress = elapsed / duration;

   // ease out that number
   const easedProgress = easeOutQuart(relativeProgress);

   // calculate new position for every thick of the requesAnimationFrame
   position =
     initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);


   // set the scrollbar position
   window.scrollTo(0, position);

   // Stop if max scroll is reached
   if (
     initialPosition !== maxAvailableScroll &&
     window.scrollY === maxAvailableScroll
   ) {
     cancelAnimationFrame(animationFrame);
     return;
   }

   // repeat until the end is reached
   if (elapsed < duration) {
     animationFrame = requestAnimationFrame(step);
   }

 }

 animationFrame = requestAnimationFrame(step);
}
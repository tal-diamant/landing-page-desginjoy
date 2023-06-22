import { animateScroll } from "./animateScroll";

interface Inputs {
  id: string;
  duration?: number;
}

const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

const getElementPosition = (element: HTMLElement): number => element.offsetTop;

export const scrollTo = ({ id, duration = 2000 }: Inputs) => {

  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;
  // console.log("get element by id:",document.getElementById(id));

  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  const element = id ? document.getElementById(id) : null;

  if (!element) {
    // log error if the reference passed is invalid
    logError();
    return;
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration,
  });
};

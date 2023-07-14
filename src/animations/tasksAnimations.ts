import gsap from 'gsap';

export type ElementAnimation = null
  | HTMLLIElement
  | string

export function peepTimeAnimation(length: number, duration: number) {
  if (length === 1 && document.getElementById('peepTime')) {
    gsap.to('#peepTime', {opacity: 0, duration: duration})
  }
}

export function delTaskAnimation(el: ElementAnimation, duration: number) {
  if (typeof el === 'string') {
    if (document.getElementById(el)) gsap.to(`#${el}`, {height: 0, padding: 0, opacity: 0, duration: duration})
  } else {
    gsap.to(el, {height: 0, padding: 0, opacity: 0, duration: duration})
  }
}

export function newTaskAnimation(el: ElementAnimation, duration: number) {
  if (typeof el === 'string') {
    if (document.getElementById(el)) gsap.fromTo(el, {opacity: 0, y: 50 }, {opacity: 1, y: 0, duration: duration})
  } else {
    gsap.fromTo(el, {opacity: 0, y: 50 }, {opacity: 1, y: 0, duration: duration})
  }
}

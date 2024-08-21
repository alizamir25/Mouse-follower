const cursorSmall=document.querySelector(".small");
const cursorBig=document.querySelector(".big");
const links=document.querySelectorAll("a");
var margin=9;
var xMousePos=0;
var yMousePos=0;
var lastScrolledLeft=0;
var lastScrolledTop=0;
const positionCursor=()=>{
  cursorSmall.style.transitionDuration="10ms";
  cursorSmall.style.transform=`translate3d(${xMousePos}px, ${yMousePos}px, 0)`;
  cursorBig.style.transitionDuration="200ms";
  cursorBig.style.transform=`translate3d(${xMousePos - margin}px, ${
    yMousePos-margin
  }px, 0)`;
};
function captureMousePosition(event) {
  xMousePos=event.pageX;
  yMousePos=event.pageY;
  positionCursor();
}
const styleCursorIn=(e)=>{
  cursorSmall.style.display="none";
  cursorBig.style.transitionDuration="100ms";
  cursorBig.style.width="40px";
  cursorBig.style.height="40px";
  margin=14;
};
const styleCursorOut=(e)=>{
  cursorSmall.style.display="block";
  cursorBig.style.transitionDuration="100ms";
  cursorBig.style.width="20px";
  cursorBig.style.height="20px";
  margin=9;
};
document.addEventListener("scroll", (event) => {
  if (lastScrolledLeft != window.scrollX) {
    xMousePos -= lastScrolledLeft;
    lastScrolledLeft = window.scrollX;
    xMousePos += lastScrolledLeft;
  }
  if (lastScrolledTop != window.scrollY) {
    yMousePos -= lastScrolledTop;
    lastScrolledTop = window.scrollY;
    yMousePos += lastScrolledTop;
  }
  positionCursor();
});
cursorBig.removeEventListener("mousedown", () => {}, true);
cursorSmall.removeEventListener("mousedown", () => {}, true);
document.addEventListener("mousemove", captureMousePosition);
links.forEach((link) => {
  link.addEventListener("mouseover", styleCursorIn);
});
links.forEach((link) => {
  link.addEventListener("mouseleave", styleCursorOut);
});
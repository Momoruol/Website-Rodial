/* stpageflip para flipbook do catalogo */

const pageFlip = new St.PageFlip(document.getElementById("book"), {
  width: 3662,
  height: 2835,
  minWidth:320,
  maxWidth:1000 ,
  minHeight:248,
  maxHeight:774,
  size: "stretch",
  showCover: true,
  usePortrait:true,
  autosize:true,
  mobileScrollSupport: true,
  maxShadowOpacity:0.5,
});



pageFlip.loadFromImages([
  "./catalogo/page_1.jpg",
  "./catalogo/page_2.jpg",
  "./catalogo/page_3.jpg",
  "./catalogo/page_4.jpg",
  "./catalogo/page_5.jpg",
  "./catalogo/page_6.jpg",
  "./catalogo/page_7.jpg",
  "./catalogo/page_8.jpg",
  "./catalogo/page_9.jpg",
  "./catalogo/page_10.jpg",
  "./catalogo/page_11.jpg",
  "./catalogo/page_12.jpg",
  "./catalogo/page_13.jpg",
  "./catalogo/page_14.jpg",
  "./catalogo/page_15.jpg",
  "./catalogo/page_16.jpg",
  "./catalogo/page_17.jpg",
  "./catalogo/page_18.jpg",
  "./catalogo/page_19.jpg",
  "./catalogo/page_20.jpg",
  "./catalogo/page_21.jpg",
  "./catalogo/page_22.jpg",
  "./catalogo/page_23.jpg",
  "./catalogo/page_24.jpg",
  "./catalogo/page_25.jpg",
  "./catalogo/page_26.jpg",
  "./catalogo/page_27.jpg",
  "./catalogo/page_28.jpg",
  "./catalogo/page_29.jpg",
  "./catalogo/page_30.jpg",
  "./catalogo/page_31.jpg",
  "./catalogo/page_32.jpg",
  "./catalogo/page_33.jpg",
  "./catalogo/page_34.jpg",
  "./catalogo/page_35.jpg",
  "./catalogo/page_36.jpg",
  "./catalogo/page_37.jpg",
  "./catalogo/page_38.jpg",
  "./catalogo/page_39.jpg",
  "./catalogo/page_40.jpg",
  "./catalogo/page_41.jpg",
  "./catalogo/page_42.jpg",
  "./catalogo/page_43.jpg",
  "./catalogo/page_44.jpg",
  "./catalogo/page_45.jpg",
  "./catalogo/page_46.jpg",
  "./catalogo/page_47.jpg",
  "./catalogo/page_48.jpg",
  "./catalogo/page_49.jpg",
  "./catalogo/page_50.jpg",
  "./catalogo/page_51.jpg",
  "./catalogo/page_52.jpg",
]);
setTimeout(fixCanvasDPR, 100);

document.getElementById("prev").onclick = () => pageFlip.flipPrev();
document.getElementById("next").onclick = () => pageFlip.flipNext();

pageFlip.on("flip", fixCanvasDPR);
window.addEventListener("resize", fixCanvasDPR);


/* ============================================================ */
/* Melhora a nitidez da versao mobile do catalogo */
function fixCanvasDPR() {
  const canvas = document.querySelector(".stf__canvas");
  if (!canvas) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  canvas.style.width = rect.width + "px";
  canvas.style.height = rect.height + "px";

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}


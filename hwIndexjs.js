// 전체 세로 슬라이드
var slider = $(".myslider");
slider
.slick({
vertical: true,
infinite: false,
arrows: false,
dots: true
});

slider.on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY > 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));


//모달팝업
$(".projA").click(function(){
  $(".popupA").show();
})
$(".projB").click(function(){
  $(".popupB").show();
})
$(".projC").click(function(){
  $(".popupC").show();
})

// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
  if($(".popupA, .popupB, .popupC").has(e.target).length === 0){
    $(".popupA, .popupB, .popupC").hide();
  }
});


//메인텍스트효과
const textOne = document.querySelector('.text--1');
const textTwo = document.querySelector('.text--2');
const logo = document.querySelector('.logo');
const wrap = document.querySelector('.text__wrap');

const intro = () => {
  const scaleTL = new TimelineMax();
  scaleTL.
  from(logo, 0.5, { scale: 0, opacity: 0, display: 'block' }).
  to(textOne, 0.25, { text: '디자이너로' }, 0.5).
  to(wrap, 0.125, { scale: 1.25, delay: 0.125 }).
  to(wrap, 0.125, { scale: 1 }).
  to(logo, 0, { opacity: 0, display: 'none' }, 1.5);
  return scaleTL;
};
const slidingWords = () => {
  const swipeTL = new TimelineMax();
  swipeTL.
  to(textOne, 0.15, { delay: 0.1, scale: 0.85 }).
  to(textOne, 0, { text: '지낸 십여년', delimiter: ' ' }).
  to(textOne, 0.1, { scale: 1 }).
  to(wrap, 0.1, { delay: 0.25, scale: 0.75 }).
  to(wrap, 0.1, { scale: 1 });
  return swipeTL;
};
const turn = () => {
  const turnTL = new TimelineMax();
  turnTL.
  to(wrap, 0, { delay: 0.5, scale: 1.5 }, 0).
  to(textOne, 0, { delay: 0.5, text: '새로운 전환점' }, 0).
  to(textTwo, 0, { delay: 0.5, text: '' }, 0).
  to(wrap, 0, { scale: 1 }, 1);
  return turnTL;
};
const type = (el, text, delay = 0.5) => {
  const typeTL = new TimelineMax();
  typeTL.add(TweenMax.to(el, 0, { delay, text: '' }));
  for (let l = 0; l < text.length; l++) {
    typeTL.add(TweenMax.to(el, 0.15, { text: text.slice(0, l + 1) }));
  }
  return typeTL;
};
const startFirst = () => {
  const startFirstTL = new TimelineMax();
  startFirstTL.
  to(textOne, 0, { text: '첫번째', delay: 0.5 }, 0).
  to(textTwo, 0, { text: '&nbsp;포트폴리오', delay: 0.5 }, 0).
  from(textOne, 0.25, { x: '-25%', opacity: 0, immediateRender: false }, 0.7).
  from(textTwo, 0.25, { x: '-125%', opacity: 0, immediateRender: false }, 0.7).

  to(textTwo, 0.25, { x: '0%', text: '' }, 1.25);
  return startFirstTL;
};
const advertTL = new TimelineMax({
  onComplete: () => {
    advertTL.restart();
  }
});
advertTL.
add(intro()).
add(slidingWords()).
add(turn()).
add(type(textOne, '그 시작의')).
add(startFirst());


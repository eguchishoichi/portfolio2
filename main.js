
// メニューバー
$('#toggle').click(function() {
  $(this).toggleClass("active");
  $('#overlay').toggleClass("open");
  if ($("html div").not("#overlay").hasClass("blur")){
     $("html div").not("#overlay").not(".button_container").removeClass("blur")
  }else{
     $("html div").not("#overlay").not(".button_container").addClass("blur")
  }
});


// 特定の位置までスクロール
$('.menu_aboutme').click(function() {
  $("html,body").animate({scrollTop:$(".aboutme").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_skills').click(function() {
  $("html,body").animate({scrollTop:$(".skills").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_service').click(function() {
  $("html,body").animate({scrollTop:$(".service").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_works').click(function() {
  $("html,body").animate({scrollTop:$(".works").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu_contact').click(function() {
  $("html,body").animate({scrollTop:$(".contact").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});



// animatedクラスの付いた要素にwaypointを登録
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      $(this.element).removeClass('fadeOutUp');
  
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '80%',
});

$('.animated').waypoint({
  handler(direction) {
    if (direction === 'up') {
      $(this.element).addClass('fadeOutUp');
      $(this.element).removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '100%',
});



// ページトップに行くボタン
jQuery(document).ready(function($) {
  $(function() {
      var showFlag = false;
      var topBtn = $('#page-top');
      var showFlag = false;
      $(window).scroll(function () {
          if ($(this).scrollTop() > 400) {
              if (showFlag == false) {
                  showFlag = true;
                  topBtn.stop().addClass('pt-active'); 
              }
          } else {
              if (showFlag) {
                  showFlag = false;
                  topBtn.stop().removeClass('pt-active'); 
              }
          }
      });
  
      topBtn.click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 500);
          return false;
      });
  });
    loadGravatars();
  });

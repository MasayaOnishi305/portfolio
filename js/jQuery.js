$(function () {
  // slider
  var $carousel = $('.slick'),
      $carouselThumb = $carousel.clone().attr('id', 'slick-thumb').insertAfter($carousel);
      
  $carousel.slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: $carouselThumb
  });
  $carouselThumb.slick({
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    asNavFor: $carousel
  });

  //スクロールによるフェードイン
  //アニメーション属性を持つ要素を非表示、animated属性を追加
  $('*[animation]').addClass('invisible animated');

  $(window).scroll(function () {
    $('*[animation]').each(function () {
      //アニメーションをさせる要素の上の位置
      var imgPos = $(this).offset().top;
      //ウインドウ上部の位置
      var scroll = $(window).scrollTop();
      //アニメーションを発火させる位置
      //var position = imgPos - window.innerHeight;
      var position = imgPos - window.innerHeight + window.innerHeight / 3;

      //animation属性に記載されたアニメーション名を取得
      if (this.hasAttribute('animation')) {
        var animation = this.getAttribute('animation');
      }
      //発火位置まで来たら要素を表示し、アニメーションをclass名に追加
      if (scroll > position) {
        $(this).removeClass('invisible').addClass(animation);
      }
      //ページのトップまでスクロールしたら要素を非表示（リセット）
      if (scroll < 10) {
        $(this).removeClass(animation).addClass('invisible');
      }
    });
  });
  //hover
  //twitter
  $('.twitter').hover(function () {
    // over
    $('.twitter-hover').css('visibility', 'visible');
  }, function () {
    // out
    $('.twitter-hover').css('visibility', 'hidden');
  }
  );
  //git-hub
  $('.git-hub').hover(function () {
    // over
    $('.git-hub-hover').css('visibility', 'visible');
  }, function () {
    // out
    $('.git-hub-hover').css('visibility', 'hidden');
  }
  );
  //HTML
  $('.html').hover(function () {
    // over
    $('.html-hover').css('visibility', 'visible');
  }, function () {
    // out
    $('.html-hover').css('visibility', 'hidden');
  }
  );
  //CSS
  $('.css').hover(function () {
    // over
    $('.css-hover').css('visibility', 'visible');
  }, function () {
    // out
    $('.css-hover').css('visibility', 'hidden');
  }
  );

  //Javascript
  $('.javascript').hover(function () {
    // over
    $('.javascript-hover').css('visibility', 'visible');
  }, function () {
    // out
    $('.javascript-hover').css('visibility', 'hidden');
  }
  );

  //WordPress
  $('.wordpress').hover(function () {
    // over
    $('.wordpress-hover').css('visibility', 'visible');
  }, function () {
    // out
    $('.wordpress-hover').css('visibility', 'hidden');
  }
  );

  //webflow
  $('.webflow').hover(function () {
    // over
    $('.webflow-hover').css('visibility', 'visible');
  }, function () {
    // out
    $('.webflow-hover').css('visibility', 'hidden');
  }
  );

  //お問い合わせ画面遷移
  function showThxMessage() {
    document.my - form.submit();
    document.getElementById('contact-box').style.display = 'none';
    document.getElementById('thxMessage').style.display = 'block';
  }

});
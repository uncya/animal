$(function () {
  // ーーーーーーーーーーーハンバーガーmenuーーーーー//
  $(".burger").click(function () {
    $(".burger").toggleClass("is-active");
    $(".menu").toggleClass("is-active");

    $('a[href^="#"]').on('click',function(){
      $('.burger').click();
    });
  });

  // ーーーーーーーーモーダルーーーーーーーーー//

  // .login-showをクリックすると
  $(".login-show").click(function () {
    // cssでdisplay:noneだったlogin-modalが出現
    $("#login-modal").fadeIn();
  });
  // cssでdisplay:noneだったsignup-modalがフェードインする
  $(".signup-show").click(function () {
    $("#signup-modal").fadeIn();
  });
  // .close-modaをクリックすると
  $(".close-modal").click(function () {
    // #loginまたはsignup-modalがフェードアウトする
    $("#login-modal").fadeOut();
    $("#signup-modal").fadeOut();
  });
  $("#submit-btn").click(function(){
    $("#login-modal").fadeOut();
    $("#signup-modal").fadeOut();
  });

  // ーーーーーーー医者紹介のhoverーーーーーーーーーー//

  $(".doctor").hover(
    function () {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつける
      $(this).find(".doctor-profile").addClass("text-active");
    },
    function () {
      $(this).find(".doctor-profile").removeClass("text-active");
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外す
    }
  );

  // ーーーーーーーページ内リンクーーーーーーーーー//

  $('a[href^="#').click(function () {
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      500
    );
  });


  // ーーーーーーFAQのアコーディオンーーーーーー//

  // .faq-list-iteをクリックしたら
  $(".faq-list-item").click(function () {
    // .answerの子要素を取得。関数にする
    var $answer = $(this).find(".answer");
    //もし.answerがopenを持っていたらtureなければfalshに。
    if ($answer.hasClass("open")) {
      // tureだったなら.answerのopenを隠す
      $answer.removeClass("open");
      // slideUpメソッドを用いて、$answerを隠す。
      $answer.slideUp();
      // 子要素のspanタグの中身をtextメソッドを用いて書き換える
      $(this).find("span").text("+");
    } else {
      $answer.addClass("open");
      // falseならopenを追加して
      $answer.slideDown();
      // slideDownメソッドを用いて、$answerを表示
      $(this).find("span").text("-");
      // 子要素のspanタグの中身をtextメソッドを用いて書き換え
    }
  });
});

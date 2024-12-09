$(document).ready(function () {
  $(".questionbutton").on("click", function () {
    const questionDiv = $(this).closest(".questionDiv");
    questionDiv.find(".answer").slideToggle();
    const icon = $(this).find("i");
    if (icon.hasClass("bi-chevron-down")) {
      icon.removeClass("bi-chevron-down").addClass("bi-chevron-up");
    } else {
      icon.removeClass("bi-chevron-up").addClass("bi-chevron-down");
    }
  });
});

$(document).ready(function () {
  $("#bannerCtnt").css({
    opacity: 0
  });

  $("#bannerImg").css({
    opacity: 0
  });

  $("#bannerContainer").css({
    opacity: 0
  });
  $("#bannerCtnt").animate({
    opacity: 1
  }, 3000);

  $("#bannerImg").delay(200).animate({
    opacity: 1
  }, 1200);

  $("#bannerContainer").delay(400).animate({
    opacity: 1
  }, 1400);

  const typerText = "Soyez la Source de Vies : Construisez un Puits pour l'Humanité !";
  const h1Element = $("#bannerLeft h1");
  let index = 0;

  function typeText() {
    if (index < typerText.length) {
      h1Element.text(h1Element.text() + typerText[index]);
      index++;
      setTimeout(typeText, 100); // Adjust typing speed here
    }
  }

  h1Element.text(""); // Clear initial text
  typeText();
  const aboutSection = $(".about-section");

  function isInViewport(element) {
    const rect = element[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

   $('#inside').find('h2, h4, h5, p').hide();
    function isInViewport(element) {
        var rect = element[0].getBoundingClientRect();
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    }
    $(window).scroll(function() {
        var delay = 0; 

        $('#inside').find('h2, h4, h5, p').each(function(index) {
            if (isInViewport($(this)) && !$(this).hasClass('visible')) {
                $(this).fadeIn(1000);
                $(this).addClass('visible');
                
                delay = (index + 1) * 2000;
                
                setTimeout(() => {
                    $(this).fadeIn(1000);
                }, delay);
            }
        });
    });
    $(window).trigger('scroll');
});




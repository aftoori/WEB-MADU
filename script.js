$(document).ready(function () {
  // Smooth scroll
  $("nav a").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 60,
      },
      700
    );
  });

  // Highlight active menu
  $("nav a").click(function () {
    $("nav a").removeClass("active");
    $(this).addClass("active");
  });
});

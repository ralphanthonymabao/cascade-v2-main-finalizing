// A $( document ).ready() block.
$(document).ready(function (event) {
  $(".cad-menu-bar").click(function (event) {
    event.stopPropagation(); // Prevents this click from triggering the document click
    $(".cad-mobile-nav").toggleClass("active");
  });
  $(".cad-mobile-menu-item").click(function (event) {
    $(".cad-mobile-nav").removeClass("active");
  });
  // Close .cad-mobile-nav if clicking outside of it or .cad-menu-bar
  $(document).click(function (event) {
    if (!$(event.target).closest(".cad-menu-bar, .cad-mobile-nav").length) {
      $(".cad-mobile-nav").removeClass("active");
    }
  });
  $(".cad-item-carousel-container").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // function handleDropdownClick(dropdown) {
  //   const $dropdown = $(dropdown);
  //   const $activeDropdowns = $dropdown.parent().find(".active");

  //   // Toggle 'active' class on the clicked dropdown before removing it from others
  //   $dropdown.toggleClass("active");

  //   // Remove 'active' class from all other active dropdowns in the same wrapper
  //   $activeDropdowns.not($dropdown).removeClass("active");
  // }

  // $(".dropdown-wrapper .dropdown").on("click", function () {
  //   handleDropdownClick(this);
  // });

  // Get all sections that have an ID defined
  const sections = $("section[id]");

  // Add an event listener for scroll
  $(window).on("scroll", function () {
    navHighlighter();
  });

  function navHighlighter() {
    // Get current scroll position
    let scrollY = $(window).scrollTop();

    // Loop through sections to get height, top, and ID values for each
    sections.each(function () {
      const sectionHeight = $(this).outerHeight();
      const sectionTop = $(this).offset().top - 50;
      const sectionId = $(this).attr("id");

      /*
    - If the current scroll position enters the space where the current section is visible, add .active class to corresponding navigation link, else remove it
    - We use sectionId as a selector to find the link needing the .active class
    */
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        $(".cad-main-nav a[href*='" + sectionId + "']").addClass("active");
      } else {
        $(".cad-main-nav a[href*='" + sectionId + "']").removeClass("active");
      }
    });
  }
});

// Finalizing
$(document).ready(function () {
  // Close the mobile nav with the close button
  $(".cad-close-btn").click(function () {
    $(".cad-mobile-nav").removeClass("active");
  });
});

// faq
$(document).ready(function () {
  // By default, the first item is active
  $(".dropdown:first").addClass("active");

  // Toggle active class when the entire dropdown box is clicked
  $(".dropdown").on("click", function () {
    var $dropdown = $(this);

    // If clicked dropdown is already active, close it
    if ($dropdown.hasClass("active")) {
      $dropdown.removeClass("active");
    } else {
      // Close all dropdowns first
      $(".dropdown").removeClass("active");

      // Then open clicked dropdown
      $dropdown.addClass("active");
    }
  });

  // Ensure that clicking the title also triggers the same toggle (for mobile-friendliness)
  $(".dropdown__title").on("click", function (e) {
    // Prevent the default action to avoid any link or button behavior
    e.stopPropagation();

    // Trigger the click event for the parent dropdown
    $(this).parent().click();
  });
});

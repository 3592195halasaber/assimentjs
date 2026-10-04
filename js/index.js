$(document).ready(function () {
  // Sidebar Navigation Logic
  function getNavWidth() {
    return $('.sidebar-content').outerWidth() || 260;
  }

  // Initial state: hide sidebar to the left
  $('#sideNavWrapper').css('left', -getNavWidth());

  let isOpen = false;

  $('#open').on('click', function (e) {
    e.preventDefault();
    if (!isOpen) {
      $('#sideNavWrapper').stop().animate({ left: 0 }, 400);
      isOpen = true;
    } else {
      $('#sideNavWrapper').stop().animate({ left: -getNavWidth() }, 400);
      isOpen = false;
    }
  });

  $('#closeNav').on('click', function (e) {
    e.preventDefault();
    $('#sideNavWrapper').stop().animate({ left: -getNavWidth() }, 400);
    isOpen = false;
  });

  // Close sidebar on link click
  $('.sidebar-content .line').on('click', function () {
    $('#sideNavWrapper').stop().animate({ left: -getNavWidth() }, 400);
    isOpen = false;
  });

  // Accordion Logic for Star Lineup
  $('.text').hide();
  // Open the first singer by default
  $('.singer-item:first-child .text').show();
  $('.singer-item:first-child .accordion-arrow').addClass('rotate-arrow');

  $('.singer-header').on('click', function () {
    const $targetText = $(this).next('.text');
    const $arrow = $(this).find('.accordion-arrow');

    // Slide up all others and reset arrows
    $('.text').not($targetText).slideUp(400);
    $('.accordion-arrow').not($arrow).removeClass('rotate-arrow');

    // Toggle current
    $targetText.stop().slideToggle(400);
    $arrow.toggleClass('rotate-arrow');
  });

  // Dynamic Live Countdown Timer
  function initCountdown() {
    // Target date set to 28 days from current date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 28);
    targetDate.setHours(21, 0, 0, 0);

    function updateTimer() {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        $('#day').html(`<h3 class="fw-bold mb-1">${days < 10 ? '0' + days : days}</h3><span class="text-white-50 small">Days</span>`);
        $('#hour').html(`<h3 class="fw-bold mb-1">${hours < 10 ? '0' + hours : hours}</h3><span class="text-white-50 small">Hours</span>`);
        $('#min').html(`<h3 class="fw-bold mb-1">${minutes < 10 ? '0' + minutes : minutes}</h3><span class="text-white-50 small">Minutes</span>`);
        $('#secound').html(`<h3 class="fw-bold mb-1">${seconds < 10 ? '0' + seconds : seconds}</h3><span class="text-white-50 small">Seconds</span>`);
      }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  initCountdown();

  // Character Counter for Message Textarea
  const maxLimit = 100;
  $('#counter').text(maxLimit);

  $('#massage').on('input keyup', function () {
    const currentLength = $(this).val().length;
    const remaining = maxLimit - currentLength;

    if (remaining <= 0) {
      $('#counter').text('0');
      $(this).val($(this).val().substring(0, maxLimit));
    } else {
      $('#counter').text(remaining);
    }
  });
});
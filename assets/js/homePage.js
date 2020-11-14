/** swiper of images on the quick-marketing block */
var mySwiperMarketingImgs = new Swiper('#quick-marketing-block .swiper-container', {
  // Optional parameters
  //direction: 'vertical',
    loop: true,
    autoplay: { delay: 2000, disableOnInteraction: false, },
    speed: 1000,
    

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})


/** scale of images when hover */
$('#some-great-categories a').hover(function () { $(this).find('img').css('transform', 'scale(1.1)') },
  function () { $(this).find('img').css('transform', 'scale(1)') })


/** swiper of categories element */
var mySwiperCategories = new Swiper('#categories.swiper-container', {
  // Optional parameters
  //direction: 'vertical',
  
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  on: {
    transitionStart: function () {
      
    }
  }
})


$('#categories a').hover(function() {
  $('#sub-categories')
    .addClass('d-flex')
    .removeClass('d-none')
}, function(e) {
    if (e.relatedTarget.id !== 'sub-categories') {
        $('#sub-categories')
          .addClass('d-none')
          .removeClass('d-flex')
    }
})

$('#sub-categories').mouseleave(function () {
  $('#sub-categories')
    .addClass('d-none')
    .removeClass('d-flex')
})




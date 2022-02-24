$('.transition').click(function () {
    // animate content
    $('.page__style').addClass('animate_content');
    $('.description').addClass('fixed');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();
    $('.description').addClass('fadeIn')
    $('.gallery').removeClass('fixed')
    setTimeout(function () {
        $('.page__style').removeClass('animate_content');
    }, 3200);
    setTimeout(function () {
        $('.page__style').removeClass('fadeIn');
    }, 1500);

});
$('.description__cancel').click(function () {
    // animate content
    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();
    $('.gallery').addClass('fixed')
    $('.description').removeClass('fixed')
    $('.container__description').attr('style', 'background-image : none; ')
    setTimeout(function () {
        $('.page__style').removeClass('animate_content');
    }, 3200);
    setTimeout(function () {
        $('.description').removeClass('fadeIn');
    }, 1500);
    setTimeout(function () {
        $('.gallery').addClass('fadeIn')
    }, 1500);
});
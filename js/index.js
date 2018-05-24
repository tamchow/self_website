$(".img-container").click(function (event) {
    const xMid = $(this).width() / 2;
    const img = $(this).find('img');
    if (img.is('[class*="rotate-"]')) {
        img.removeClass('rotate-in rotate-out')
    } else {
        const mousePosX = event.offsetX;
        if (mousePosX < xMid) {
            img.addClass('rotate-out');
        } else {
            img.addClass('rotate-in');
        }
    }
})
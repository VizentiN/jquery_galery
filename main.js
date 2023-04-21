$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#button_cancel').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const addressNewImg = $('#address_new_img').val();
        const newIten = $('<li style="display: none"></li>');
        $(`<img src="${addressNewImg}">`).appendTo(newIten);
        $(`
            <div class="overlay_img_link">
                <a href="${addressNewImg}" target="_black" title="Image in real size">
                    Image in real size
                </a>
            </div>
        `).appendTo(newIten);
        $(newIten).appendTo('ul');
        $(newIten).fadeIn(1000);
        $('#address_new_img').val('');
    })
})
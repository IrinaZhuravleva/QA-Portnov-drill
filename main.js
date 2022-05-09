$(document).ready(function () {
    $('.pbox').hide();
    $('.pbox#qa_basics').show();

 
    var $mnu = $('#menu').on('click', 'a', function () {
    var $this = $(this), $li = $(this).closest('li');
				if($li.is('.current')){
				return ;
    }
    $li.addClass('current');

    $mnu.find('.current').not($li).removeClass('current');
    $('.pbox:visible').hide(600);
    $('#' + $this.data('id')).show(600);
    });

    $mnu.find('a:first').click();
});

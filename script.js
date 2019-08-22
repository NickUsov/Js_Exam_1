$('document').ready(()=>{
    $('button').first().addClass("active");
    $('.tabcontent').first().css("display", "block");
});
function openTab(evt, tabName) {
    $('.tabcontent').css("display","none");
    $('.tablinks').removeClass("active");
    $(`#${tabName}`).css("display","block");
    evt.currentTarget.className += " active";
  }
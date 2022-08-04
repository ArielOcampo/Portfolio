$(document).ready(function () {


  $('body').on({
    'mousemove': function (e) {
      console.clear()
      let clientX = e.originalEvent.clientX
      let clientY = e.originalEvent.clientY
      $('#cursor').css({
        'left': (clientX - 30) + 'px',
        'top': (clientY - 30) + 'px'
      })
    }
  })

  $('.a').on({
    'mouseover': function () {
      $('#cursor').addClass('mini')
    },
    'mouseout': function () {
      $('#cursor').removeClass('mini')
    },
  })

})


var check = document.querySelector(".check")
check.addEventListener('click', idioma)

function idioma() {
  let value = check.checked
  if (value == true) {
    location.href = "../es/index.html"
  } else {
    location.href = "../index.html"
  }

}
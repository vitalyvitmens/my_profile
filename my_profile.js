$(function () {
  var p1 = $('#soft1')
  var p2 = $('#soft2')

  p1.animate({ opacity: 0.5 })
  p1.animate({ left: '-=60%', left: '+=60%', fontSize: '-=50%' }, 1000)
  p1.animate({ left: '+=60%', left: '-=60%', fontSize: '+=50%' }, 500)
  p1.animate({ opacity: 1.0 }, 200)
  p1.animate({ opacity: 0.1 }, 200)
  p1.animate({ opacity: 1.0 }, 200)
  p1.animate({ opacity: 0.1 }, 200)
  p1.animate({ opacity: 1.0 }, 200)

  p2.animate({ opacity: 0.5 })
  p2.animate({ left: '-=90%', left: '+=90%', fontSize: '-=50%' }, 1000)
  p2.animate({ left: '+=90%', left: '-=90%', fontSize: '+=50%' }, 1300)
  p2.animate({ opacity: 1.0 })
})

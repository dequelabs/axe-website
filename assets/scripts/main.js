jQuery(function ($) {
  // Check if any links in the menu is the current page
  $('.dqpl-main-nav a').each(function () {
    if (this.href === window.location.href) {
      $(this.parent)
      .addClass('dqpl-subnav')
      .append(buildSubnav())
    }
  })

  // Build ul list of all h2s, with h3s as sublists
  function buildSubnav () {
    var structure = []
    $('.dqpl-main-content h2, .dqpl-main-content h3').each(function () {
      if (
        this.tagName.toUpperCase() === 'H2' &&
        this.id !== 'table-of-contents'
      ) {
        structure.push({
          h2: this,
          h3s: []
        })
      } else if (this.tagName.toUpperCase() === 'H3') {
        structure[structure.length-1].h3s.push(this)
      }
    })

    return $('<ul />').append(structure.map(function (item) {
      var a = $('<a href="#' + item.h2.id + '">' +
        item.h2.textContent +
      '</a>')

      // No sub menu
      if (item.h3s.length === 0) {
        return $('<li />').append(a)

      // Submenu
      } else {
        var subUl = $('<ul />').append(
          item.h3s.map(function (h3) {
            return $('<li><a href="' + h3.id + '">' +
              h3.textContent +
            '</a></li>')
          })
        )
        return $('<li class="dqpl-subnav">').append(a, subUl)
      }
    }))
  }
})


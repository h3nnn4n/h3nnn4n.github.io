const root = document.querySelector("body, html");

function buildGallery(container) {
  const images = container.querySelectorAll(".gg-box > img");
  const l = images.length;

  for(var i = 0; i < l; i++) {
    images[i].addEventListener("click", function(i) {
      var currentImg = this;

      const parentItem = currentImg.parentElement;
      const screenItem = document.createElement('div');

      screenItem.id = "gg-screen";
      container.prepend(screenItem);

      if (parentItem.hasAttribute('data-theme'))
        screenItem.setAttribute("data-theme", "dark");

      var route = currentImg.src.replace("_thumbnail", "");

      root.style.overflow = 'hidden';
      screenItem.innerHTML = '<div class="gg-image"></div><div class="gg-close gg-btn">&times</div><div class="gg-next gg-btn">&rarr;</div><div class="gg-prev gg-btn">&larr;</div>';

      const first = images[0].src;
      const last = images[l-1].src;
      const imgItem = document.querySelector(".gg-image");
      const prevBtn = document.querySelector(".gg-prev");
      const nextBtn = document.querySelector(".gg-next");
      const close = document.querySelector(".gg-close");

      imgItem.innerHTML = '<img src="' + route.replace("_thumbnail", "") + '">';

      if (l > 1) {
        if (route == first) {
          prevBtn.hidden = true;
          var prevImg = false;
          var nextImg = currentImg.nextElementSibling;
        }
        else if (route == last) {
          nextBtn.hidden = true;
          var nextImg = false;
          var prevImg = currentImg.previousElementSibling;
        }
        else {
          var prevImg = currentImg.previousElementSibling;
          var nextImg = currentImg.nextElementSibling;
        }
      }
      else {
        prevBtn.hidden = true;
        nextBtn.hidden = true;
      }

      screenItem.addEventListener("click", function(e) {
        if (e.target == this || e.target == close) hide();
      });

      root.addEventListener("keydown", function(e) {
        if (e.keyCode == 37 || e.keyCode == 38) prev();
        if (e.keyCode == 39 || e.keyCode == 40) next();
        if (e.keyCode == 27 ) hide();
      });

      prevBtn.addEventListener("click", prev);
      nextBtn.addEventListener("click", next);

      function prev() {
        prevImg = currentImg.previousElementSibling;
        imgItem.innerHTML = '<img src="' + prevImg.src.replace("_thumbnail", "") + '">';
        currentImg = currentImg.previousElementSibling;
        var mainImg = document.querySelector(".gg-image > img").src;
        nextBtn.hidden = false;
        prevBtn.hidden = mainImg === first;
      };

      function next() {
        nextImg = currentImg.nextElementSibling;
        imgItem.innerHTML = '<img src="' + nextImg.src.replace("_thumbnail", "") + '">';
        currentImg = currentImg.nextElementSibling;
        var mainImg = document.querySelector(".gg-image > img").src;
        prevBtn.hidden = false;
        nextBtn.hidden = mainImg === last;
      };

      function hide() {
        root.style.overflow = 'auto';
        screenItem.remove();
      };
    });
  }
}

function gridGallery (options) {
  if (options.selector) selector = document.querySelector(options.selector);
  if (options.darkMode) selector.setAttribute("data-theme", "dark");
  if (options.layout == "horizontal" || options.layout == "square") selector.setAttribute("data-layout", options.layout);
  if (options.gaplength) selector.style.setProperty('--gap-length', options.gaplength + 'px');
  if (options.rowHeight) selector.style.setProperty('--row-height', options.rowHeight + 'px');
  if (options.columnWidth) selector.style.setProperty('--column-width', options.columnWidth + 'px');
}

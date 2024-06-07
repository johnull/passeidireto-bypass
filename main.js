var html = document.documentElement.innerHTML;
var bypass = html.replace(/style="filter/g, ':)');
document.documentElement.innerHTML = bypass;

var e = document.querySelectorAll('.BannerSelector_banner-container__lwUxw')
for (var i = 0; i < e.length; i++) e[i].remove()
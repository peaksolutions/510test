var resizeBanner=function(){var n=$(".navbar").height(),e=$(window).height(),r=e-n;$("#banner").height(r);var a=r>500?4:1;500>r&&(r=n),$("#banner1 .container").css({"margin-top":(r-n)/a})};$(document).ready(function(){$(window).resize(resizeBanner),resizeBanner()});
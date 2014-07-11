(function()  {
  'use strict';
  $(document).ready(function()  {
    $("#newslinks a").click(function()  {
      loadPage($(this));
      return false;
});
  function loadPage(link)  {
    var url = link.attr("href");
    $("#headlines").load(url + " .newsItem");
}
});
})()
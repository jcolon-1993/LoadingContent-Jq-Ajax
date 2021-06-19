$("nav a").on("click", function(e)
{
  e.preventDefault();

  // URL to load
  var url = this.href;

  // Cache selection
  var $content = $("#content");

  // Update links
  $("nav a.current").removeClass("current");
  $(this).addClass("current");
  // Remove content
  $("#container").remove();

  $.ajax(
    {
      // Get or post
      type: "GET",
      //Path to file
      url: url,
      // Waiting time
      timeout: 2000,
      //Before ajax
      beforeSend: function()
      {
        // Load Message
        $content.append("<div id='load'>Loading</div>");
      },
      // Once finished
      complete: function()
      {
        // Clear message
        $("#loading").remove();
      },
      //Show content
      success: function(data)
      {
        $content.html( $(data).find("#container")).hide().fadeIn(400);

      },
      // Show error Message
      fail: function()
      {
        $("#panel").html("div class='loading'>Please try again soon.</div>");

      }
    });

});

//The URIs of the REST endpoint

POSTURI = "https://prod-05.northcentralus.logic.azure.com/workflows/a19b913a3ea04b3581b3365d8b25ad74/triggers/manual/paths/invoke/rest/v1/post?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ECmHj6_o2V4A-3i4M6vO1jse5dv7S_9A1JN3IvsjhZU";
GETURI = "https://prod-04.northcentralus.logic.azure.com/workflows/6d8e3bbcbb284983a5c9c902b04a6f51/triggers/manual/paths/invoke/rest/v1/post?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OLEiCM1UXhsLtWsAlksoQxDnqY1qk5LCUBHKLMgX2W0"
BLOB_ACCOUNT = "";

//Handlers for button clicks
$(document).ready(function() {

 
  $("#retPosts").click(function(){

      //Run the get asset list function
      getPosts();

  }); 

   //Handler for the new asset submission button
  $("#subNewForm").click(function(){

    //Execute the submit new asset function
    submitNewPost();
    
  }); 
});

//A function to submit a new asset to the REST endpoint 
function submitNewPost(){
  var subObj = {
    Text: $('#Text').val()
  }
  subObj = JSON.stringify(subObj)

  $.post({
    url:POSTURI,
    data: subObj,
    contentType: 'application/json; charset=utf-8'
  }).done(function (response) { getPosts() } );
}

//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getPosts(){

  $('#Postlist').html('<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>');

  $.getJSON(GETURI, function( data ) {

  var items = [];

  $.each( data[0], function( key, val ) {
    items.push( "Note: " + val["Note"] + "<br/>");
    items.push('<button type="button" id="subNewForm" class="btn btndanger" onclick="deletePost('+val["ID"] +')">Delete</button> <br/><br/>');
  });

  $('#PostList').empty();

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
    }).appendTo( "#PostList" );
  });
}


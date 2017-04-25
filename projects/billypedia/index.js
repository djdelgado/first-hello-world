/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('color', 'blue');
        $('#section-quotes').css('font-style', 'italic');
        
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        var topRated = data.discography.topRated;
        var recordings = data.discography.recordings;
        $('<div>').attr('id', 'image-container-topRated').addClass('image-container').appendTo($('#header-top-rated'));
        $('<img>').attr('id', 'top-recording-image').attr('src', "images/album/voice-in-the-night.jpg").addClass('image').appendTo($('#image-container-topRated'));
       
        _.map(topRated, function(obj, i, array){
              $("<li>").text(obj.title).addClass('title-top-rated').attr('art', obj.art).appendTo($("#list-top-rated"));
        });
        //Top Rated image change
        $('.title-top-rated').on('click', function(event) {
            $('#top-recording-image').fadeOut('fast', function(){
                $('#top-recording-image').attr('src', $(event.currentTarget).attr('art'));
            }).fadeIn();
        });
        
        
        //Other recordings image change
        
        
        
        $('<section>').attr('id', 'section-recordings').appendTo($('#sidebar'));
        $('<header>').attr('id', 'header-recordings').text('Other Recordings').prependTo($('#section-recordings'));
        $('<div>').attr('id', 'image-container-recordings').addClass('image-container').appendTo($('#header-recordings'));
        $('<img>').attr('id', 'recording-image').attr('src', "images/album/eastern-rebellion.jpg").addClass('image').prependTo($('#image-container-recordings'));
        $('<ul>').attr('id', 'list-recordings').appendTo($('#section-recordings'));
        
        _.forEach(recordings, function(obj, i, array){
            $('<li>').attr('class', 'recording' + i).on('click', function(event) {
            $('#recording-image').fadeOut('fast', function(){
                $('#recording-image').attr('src', obj.art);
            }).fadeIn();
          }).appendTo($('#list-recordings'));
            $('<div>').attr('class', 'title').text("Title: " + obj.title).attr('art', obj.art).appendTo($('.recording' + i));
            $('<div>').attr('class', 'artist').text("Artist: " + obj.artist).attr('art', obj.art).appendTo($('.recording' + i));
            $('<div>').attr('class', 'release').text("Release: " + obj.release).attr('art', obj.art).appendTo($('.recording' + i));
            $('<div>').attr('class', 'year').text("Year: " + obj.year).attr('art', obj.art).appendTo($('.recording' + i));
        });
        
        // Billy image change
        var billyImages = data.images.billy;
        var i = 0;
        
        $('#image-billy').on('click', function(event){
            if(i === billyImages.length -1){
                i=0;
            } else{
                i++;
            }
            $('#image-billy').fadeOut('slow', function(){
                $('#image-billy').attr("src", billyImages[i]);
            }).fadeIn('fast');
        });
        
        $('<section>').attr('id', 'section-rider').appendTo($('#sections'));
        $('<h3>').attr('class', 'rider-title').text('Rider Info').appendTo($('#section-rider'));
        
        var riders = data.rider;
        var createTable = function(riderinfo){
            var createRow = function(rider){
                var $row = $('<tr>');
                var $type = $('<td>').text(rider['type']);
                var $desc = $('<td>'). text(rider['desc']);
                $row.append($type)
                $row.append($desc);
                return $row;
            }
            var $table = $('<table>');
            var $rows = riderinfo.map(createRow);
            $table.append($rows);
            return $table;
        };
        createTable(riders).appendTo($("#section-rider"));
        
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});



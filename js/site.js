$(function () {

    console.log(`jquety goodness has loaded`);

    $('#bntLoadMovies').on('click', function () {

        console.log(`loading the movies`);

        $.getJSON('https://college-movies.herokuapp.com/',function(movieData){


            console.log('loading the movies wiht json call');
            htmlString = [];

            console.log(movieData);
            for (i = 0; i < movieData.length; i++) {
                console.log(`Title is ${movieData[i]['title']}`);

                htmlString.push(`<p> ${movieData[i]['title']}</p>`);

                cast = movieData[i]['cast'].split(",");
                console.log(cast);
                htmlString.push(`<ul>`);
                for (const member of cast){

                    console.log(`cast memeber is ${member}`);
                    htmlString.push(`<li> Cast: ${member}</li>`);

                }

                htmlString.push(`</ul>`);
            }

            $('#messagePanel').html(htmlString.join(''));
            

        })

    })

})
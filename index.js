import config from './server/config/config';
import { app, server } from './server/server';
import logger from './server/utils/logger';

app.listen({ port: config.port }, () => logger.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`));

// var Crawler = require("crawler");

// var c = new Crawler({
//     maxConnections: 10,
//     // This will be called for each crawled page
//     callback: function (error, res, done) {
//         if (error) {
//             console.log(error);
//         } else {
//             var $ = res.$;
//             // $ is Cheerio by default
//             //a lean implementation of core jQuery designed specifically for the server
//             //console.log($(".fav-toggle.ps-absolute.l16.c-pointer.js-fav-toggle").text());
//             //console.log($(".fav-toggle").attr('data-ga-label'));
//             // console.log($('span.fav-toggle').html())
//             $('span.fav-toggle').each(function () {
//                 console.log($(this).attr('data-ga-label'));
//             })
//         }
//         done();
//     }
// });

// // Queue a list of URLs
// c.queue(['https://stackoverflow.com/jobs']);
import crawler from '../crawler';

const getJobs = async () => new Promise((resolve, reject) => {
  crawler.queue([{
    uri: 'https://stackoverflow.com/jobs',

    // The global callback won't be called
    callback(error, res) {
      if (error) {
        reject(error);
      } else {
        const $ = res.$;
        // resolve({ description: $('span.fav-toggle').html() });
        const result = [];
        $('h2.job-details__spaced a').each(function () {
          result.push({ description: $(this).attr('title') });
        });
        resolve(result);
      }
    },
  }]);
});

export { getJobs };

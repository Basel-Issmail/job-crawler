import crawler from '../crawler';

const getResolvedResult = (resolve, reject, error, res) => {
  if (error) {
    reject(error);
  } else {
    const $ = res.$;
    // resolve({ description: $('span.fav-toggle').html() });
    const result = [];
    $('.-item.-job').each(function getDetails() {
      result.push(
        {
          title: $(this).find('h2.job-details__spaced  a').attr('title'),
          link: $(this).find('h2.job-details__spaced  a').attr('href'),
          company: $(this).find('div.fc-black-700.fs-body2').clone().find('span')
            .remove()
            .end()
            .text()
            .replace(/\n/g, '')
            .replace(/\r/g, '')
            .trim(),
        },
      );
    });
    resolve(result);
  }
};

const getJobs = async () => new Promise((resolve, reject) => {
  crawler.queue([{
    uri: 'https://stackoverflow.com/jobs',

    // The global callback won't be called
    callback(error, res) {
      getResolvedResult(resolve, reject, error, res);
    },
  }]);
});

const searchJobs = async input => new Promise((resolve, reject) => {
  crawler.queue([{
    uri: `https://stackoverflow.com/jobs?sort=i&q=${input.keyWord}&pg=${input.pageNumber}`,

    // The global callback won't be called
    callback(error, res) {
      getResolvedResult(resolve, reject, error, res);
    },
  }]);
});

export { getJobs, searchJobs };

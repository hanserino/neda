function podcastFetch(containerId){
    let podcasts = {};
    const container = document.getElementById(containerId);
    const buzzApiKey = "ApV99yzvwApV99yzvwApV99yzvwApV99yzvw";
    const request = `https://www.buzzsprout.com/api/145661/?api_token=${buzzApiKey}/episodes.json`;

    fetch(`${request}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            } 
        }).then(function (response) {
            return response.json().then(function (data) {
                podcasts.data = data;
                console.log(podcasts.data);

                container.dataset.fetchSuccess = true;
                container.innerHTML = `<h2>We have contact.</h2>`;
                
            });
        }).catch(error => {
            container.dataset.fetchSuccess = "fail";
            console.log('Events fetching error: ', error);
            container.innerHTML = `<h2 class="fetch-error">Noe gikk galt med innhentingen av podcasts. Prøv å last siden på nytt.</h2>`;
        });
} 
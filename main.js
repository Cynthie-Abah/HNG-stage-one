const slackUserName = 'Cynthia'
const slackDisplayImage = 'https://github.com/Cynthie-Abah/HNG-stage-one/blob/main/hero-pic.png?raw=true'
const myTrack = 'Frontend Track'
const sourceCode = 'https://github.com/Cynthie-Abah/HNG-stage-one'

// document.getElementById('datetime').innerHTML = $scope.currentDate;
document.querySelector('.first-heading').innerHTML = slackUserName;
document.querySelector('.first-para').innerHTML = myTrack;
const imgElement = document.querySelector('.item'); 
imgElement.setAttribute('alt', slackUserName);

const imgSrc = document.querySelector('.item'); 
imgSrc.setAttribute('src', slackDisplayImage);

const githubLink = document.querySelector('.btn'); 
githubLink.setAttribute('href', sourceCode);

const currentTime = document.querySelector('#datetime')

const timeTicker = () => {
    const currentDate = new Date().toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'long'
      });
    currentTime.innerHTML = currentDate;
    return currentDate;
  }
  
  setInterval(timeTicker, 1000);

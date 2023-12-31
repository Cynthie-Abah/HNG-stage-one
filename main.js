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
imgElement.setAttribute('src', slackDisplayImage);

const githubLink = document.querySelector('.btn'); 
githubLink.setAttribute('href', sourceCode);

const currentTimer = document.querySelector('#datetime')

const timeTicker = () => {
    const currentDate = new Date();

    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const time = currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC',
        timeZoneName: 'short'
    });
    
    currentTimer.innerHTML = `${dayOfWeek} ${time}`;
    return currentDate;
  }
  
  setInterval(timeTicker, 1000);

// dependency
import projectsJson from '../assets/projects-json.js';

// private
function newProjectCard(name, thumbnail, startDate, endDate) {
  if (typeof name != 'string') {
    throw new Error(toString(name) + ' is not a string!');
  }
  if (typeof thumbnail != 'string') {
    throw new Error(toString(thumbnail) + ' is not a string!');
  }
  if (typeof startDate != 'string') {
    throw new Error(toString(startDate) + ' is not a string!');
  }
  if (typeof endDate != 'string') {
    throw new Error(toString(endDate) + ' is not a string!');
  }

  const thumbnailElement = document.createElement('img');
  thumbnailElement.setAttribute('src', thumbnail);
  thumbnailElement.setAttribute('alt', name + " thumbnail");
  
  const titleElement = document.createElement('div');
  titleElement.setAttribute('class', 'project-card-title');
  titleElement.innerText = name;

  const cardElement = document.createElement('div');
  cardElement.appendChild(thumbnailElement);
  cardElement.appendChild(titleElement);

  return cardElement;
}

// public
export function initialize() {
  console.log('Sup bitches');

  const mainElement = document.getElementById('main');
  if (mainElement == null) {
    throw new Error('There is no main element in the DOM');
  }

  const gridElement = document.createElement('div');
  gridElement.setAttribute('class', 'grid');
  mainElement.appendChild(gridElement);

  for (var i = 0; i < projectsJson.length; i++) {
    console.log(i, projectsJson[i]);

    const projectInfo = projectsJson[i];
    const cardElement = newProjectCard(
      projectInfo['name'],
      projectInfo['thumbnail'],
      projectInfo['start'],
      projectInfo['end']
    );

    gridElement.appendChild(cardElement);
  }
}

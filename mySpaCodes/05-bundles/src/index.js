import moment from 'moment'

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = moment()
  
    return element;
  }
  
  document.body.appendChild(component());
/// только пока не будет готов бек
import './data/articles.json';
import './data/skills.json';
import './data/works.json';

// skills

export function fetchSkills() {
  return fetch('src/data/skills.json').then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res.json();
  });
}

// articles

export function fetchArticles() {
  return fetch('src/data/articles.json').then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res.json();
  });
}

// works

export function fetchWorks() {
  return fetch('src/data/works.json').then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res.json();
  });
}

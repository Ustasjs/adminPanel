/// только пока не будет готов бек
import './data/articles.json';
import './data/skills.json';
import './data/works.json';

const url = 'http://localhost:3000';

const articlesApi = '/api/blog';
const worksApi = '/api/portfolio';
const skillsApi = '/api/about';
const options = {
  mode: 'cors'
};

// skills
// fetch

export function fetchSkills() {
  return fetch('src/data/skills.json').then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res.json();
  });
}

// articles
//fetch

export function fetchArticles() {
  return fetch(url + articlesApi, options).then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res.json();
  });
}

//add

export function addArticleToDb(name, content, date) {
  const data = new FormData();
  data.append('name', name);
  data.append('content', content);
  data.append('date', date);

  const addOption = Object.assign({}, options, {
    method: 'POST',
    body: data
  });
  return fetch(url + articlesApi, addOption).then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res;
  });
}

//delete

export function deleteArticleFromDb(id) {
  const deleteOption = Object.assign({}, options, { method: 'DELETE' });
  return fetch(url + articlesApi + id, deleteOption).then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res;
  });
}

// works
// fetch

export function fetchWorks() {
  return fetch(url + worksApi, options).then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res.json();
  });
}

//add

export function addWorksToDb(name, stack, picture) {
  const data = new FormData();
  data.append('name', name);
  data.append('stack', stack);
  data.append('picture', picture);

  const addOption = Object.assign({}, options, {
    method: 'POST',
    body: data
  });
  return fetch(url + worksApi, addOption).then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res;
  });
}

//delete

export function deleteWorkseFromDb(id) {
  const deleteOption = Object.assign({}, options, { method: 'DELETE' });
  return fetch(url + worksApi + id, deleteOption).then(res => {
    if (res.status >= 400) {
      throw new Error('Server side error');
    }
    return res;
  });
}

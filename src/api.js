let url;
let options;

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:3000';
  options = {
    mode: 'cors'
  };
} else {
  url = 'http://92.53.104.80:3000';
  options = {
    mode: 'same-origin'
  };
}

const articlesApi = '/api/blog';
const worksApi = '/api/portfolio';
const skillsApi = '/api/skills';

// skills
// fetch

export function fetchSkills() {
  return fetch(url + skillsApi, options).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res.json();
  });
}

// add

export function addSkillToDb(name, percents, type) {
  const data = { name, percents, type };
  const JSONData = JSON.stringify(data);
  const myHeaders = new Headers();

  myHeaders.set('Content-Type', 'application/json');

  const addOption = Object.assign({}, options, {
    method: 'POST',
    body: JSONData,
    credentials: 'include',
    headers: myHeaders
  });
  return fetch(url + skillsApi, addOption).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

// update

export function updateSkillsDB(obj) {
  const JSONData = JSON.stringify(obj);
  const myHeaders = new Headers();

  myHeaders.set('Content-Type', 'application/json');

  const addOption = Object.assign({}, options, {
    method: 'PUT',
    body: JSONData,
    credentials: 'include',
    headers: myHeaders
  });
  return fetch(url + skillsApi, addOption).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

//delete

export function deleteSkillFromDb(id) {
  const deleteOption = Object.assign({}, options, {
    method: 'DELETE',
    credentials: 'include'
  });
  return fetch(url + skillsApi + id, deleteOption).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

// articles
//fetch

export function fetchArticles() {
  return fetch(url + articlesApi, options).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res.json();
  });
}

//add

export function addArticleToDb(obj) {
  const JSONData = JSON.stringify(obj);
  const myHeaders = new Headers();

  myHeaders.set('Content-Type', 'application/json');

  const addOption = Object.assign({}, options, {
    method: 'POST',
    body: JSONData,
    credentials: 'include',
    headers: myHeaders
  });
  return fetch(url + articlesApi, addOption).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

//delete

export function deleteArticleFromDb(id) {
  const deleteOption = Object.assign({}, options, {
    method: 'DELETE',
    credentials: 'include'
  });
  return fetch(url + articlesApi + id, deleteOption).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

// works
// fetch

export function fetchWorks() {
  return fetch(url + worksApi, options).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res.json();
  });
}

//add

export function addWorksToDb(name, stack, link, description, picture) {
  const data = new FormData();
  data.append('name', name);
  data.append('stack', stack);
  data.append('link', link);
  data.append('description', description);
  data.append('picture', picture);

  const addOption = Object.assign({}, options, {
    method: 'POST',
    credentials: 'include',
    body: data
  });
  return fetch(url + worksApi, addOption).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

//delete

export function deleteWorkseFromDb(id) {
  const deleteOption = Object.assign({}, options, {
    method: 'DELETE',
    credentials: 'include'
  });
  return fetch(url + worksApi + id, deleteOption).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

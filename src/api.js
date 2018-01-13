const url = 'http://localhost:3000';

const articlesApi = '/api/blog';
const worksApi = '/api/portfolio';
const skillsApi = '/api/skills';
const options = {
  mode: 'cors'
};

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
  const deleteOption = Object.assign({}, options, { method: 'DELETE' });
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
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

//delete

export function deleteArticleFromDb(id) {
  const deleteOption = Object.assign({}, options, { method: 'DELETE' });
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
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

//delete

export function deleteWorkseFromDb(id) {
  const deleteOption = Object.assign({}, options, { method: 'DELETE' });
  return fetch(url + worksApi + id, deleteOption).then(res => {
    if (res.status >= 400) {
      throw new Error(`Server side error: ${res.statusText}`);
    }
    return res;
  });
}

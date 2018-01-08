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

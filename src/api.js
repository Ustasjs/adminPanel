// skills

export function fetchSkills() {
  return fetch('src/data/skills.json')
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Server side error')
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err)
    })
}

// articles

export function fetchArticles() {
  return fetch('src/data/articles.json')
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Server side error')
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err)
    })
}

// works

export function fetchWorks() {
  return fetch('src/data/works.json')
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Server side error')
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err)
    })
}
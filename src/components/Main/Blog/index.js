import React, { Component } from 'react';
import ArticleForm from './ArticleForm';
import CurrentArticles from './CurrentArticles';
import { fetchArticles } from '../../../api';

import "./Blog.scss"

export class Blog extends Component {
  state = {
    works: null
  }

  componentDidMount() {
    fetchArticles()
      .then((res) => {
        this.setState({ articles: res })
      })
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="blog">
        <h2 className="heading heading_medium">
          Страница "Блог"
        </h2>
        <div className="blog__wrapper">
          <ArticleForm />
          <CurrentArticles articles={articles} />
        </div>
      </div>
    )
  }
}

export default Blog;
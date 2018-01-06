import React, { Component } from 'react';
import ArticleForm from './ArticleForm';
import CurrentArticles from './CurrentArticles';
import { fetchArticles } from '../../../api';

import './Blog.scss';

export class Blog extends Component {
  state = {
    articles: null
  };

  componentDidMount() {
    this.handleUpdateArticles();
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="blog">
        <h2 className="heading heading_medium">Страница "Блог"</h2>
        <div className="blog__wrapper">
          <ArticleForm addArticle={this.addArticle} />
          <CurrentArticles
            articles={articles}
            deleteArticle={this.handleDeleteArticle}
          />
        </div>
      </div>
    );
  }

  handleUpdateArticles = () => {
    fetchArticles().then(res => {
      this.setState({ articles: res });
    });
  };

  addArticle = (id, name) => {
    const article = { id, name };
    const articles = this.state.articles;

    this.setState({ articles: [...articles, article] });
  };

  handleDeleteArticle = id => {
    const articles = this.state.articles;
    this.setState({
      articles: articles.filter(elem => elem.id !== id)
    });
  };
}

export default Blog;

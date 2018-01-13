import React, { Component } from 'react';
import ArticleForm from './ArticleForm';
import CurrentArticles from './CurrentArticles';
import {
  fetchArticles,
  deleteArticleFromDb,
  addArticleToDb
} from '../../../api';
import './Blog.scss';

export class Blog extends Component {
  state = {
    articles: [],
    connectionError: false
  };

  componentDidMount() {
    this.handleUpdateArticles();
  }

  render() {
    const { articles, connectionError } = this.state;

    return (
      <div className="inner-container">
        <h2 className="heading heading_medium">Страница "Блог"</h2>
        {connectionError ? (
          <div className="error blog__error">
            Произошла ошибка соединения: {connectionError}
          </div>
        ) : null}
        <div className="inner-wrapper">
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
    return fetchArticles()
      .then(res => {
        this.setState({ articles: res.articles, connectionError: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };

  addArticle = (name, content, date) => {
    return addArticleToDb(name, content, date)
      .then(() => this.handleUpdateArticles())
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };

  handleDeleteArticle = id => {
    deleteArticleFromDb(id)
      .then(() => this.handleUpdateArticles())
      .catch(err => {
        console.error(err);
        this.setState({ connectionError: err.message });
      });
  };
}

export default Blog;

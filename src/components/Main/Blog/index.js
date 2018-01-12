import React, { Component } from 'react';
import ArticleForm from './ArticleForm';
import CurrentArticles from './CurrentArticles';
import {
  fetchArticles,
  deleteArticleFromDb,
  addArticleToDb
} from '../../../api';

export class Blog extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.handleUpdateArticles();
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="inner-container">
        <h2 className="heading heading_medium">Страница "Блог"</h2>
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
    fetchArticles()
      .then(res => {
        this.setState(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  addArticle = (name, content, date) => {
    const article = { name, content, date };
    const articles = this.state.articles;

    addArticleToDb(name, content, date)
      .then(this.setState({ articles: [...articles, article] }))
      .catch(err => {
        console.error(err);
      });
  };

  handleDeleteArticle = id => {
    const articles = this.state.articles;
    deleteArticleFromDb(id)
      .then(
        this.setState({
          articles: articles.filter(elem => elem._id !== id)
        })
      )
      .catch(err => {
        console.error(err);
      });
  };
}

export default Blog;

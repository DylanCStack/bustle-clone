import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    showCompose(){
      this.set('addNewArticle', true);
    },
    saveArticle() {
      var params = {
        author: this.get("author"),
        title: this.get("title"),
        text: this.get("text"),
        date: Date.now(),
        category: this.get("category"),
        mainImage: this.get("mainImage")
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});

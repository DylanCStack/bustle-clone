import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticle(){
      this.set('updateArticleForm', true);
    },
    update(article){
      var params = {
        author: this.get("author"),
        title: this.get("title"),
        text: this.get("text"),
        date: Date.now(),
        category: this.get("category"),
        mainImage: this.get("mainImage")
      };
      this.set("updateArticleForm", false);
      this.sendAction("update", article, params);
    }
  }
});

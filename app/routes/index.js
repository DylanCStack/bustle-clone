import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("article");
  },
  actions: {
    saveArticle(params){
      var addNewArticle = this.store.createRecord('article', params);
      addNewArticle.save();
      this.transitionTo("index");
    }
  }
});

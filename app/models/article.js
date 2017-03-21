import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  text: DS.attr(),
  teaser: Ember.computed("text", function(){
    console.log(this.get("text"));
    return this.get("text").substring(0,140) + "...";
  }),
  date: DS.attr(),
  category: DS.attr(),
  mainImage: DS.attr()
});

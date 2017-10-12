import path from 'path'
import Vue from 'vue'

import ComPasHeader from '$components/Header.vue';

describe( 'Header.vue', () => {
     it ( 'show different header by different condition', () => {
        const Constructor = Vue.extend({
          template: `<div><com-pas-header :classObject="classObject" :title="title"></com-pas-header></div>`,
          components:{
            'com-pas-header': ComPasHeader
          },
          data: function () {
            return {
              title: '选择乘车人',
              classObject: {
                    's-comPas-header':true,
                    's-comPas-header-color': true
                }
            }
          }
        });
        var HeaderComponent = new Constructor().$mount();
        console.log("-----------", HeaderComponent.$el, "-----------");
        expect(HeaderComponent.$el.textContent.replace(/\s+/g, "")).toBe("选择乘车人");
        expect(HeaderComponent.$el.querySelector('header').className).toMatch('s-comPas-header');
     })
})

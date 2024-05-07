import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

const App = {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(){
      this.count++;
    }
  },
  template:`
    <button @click="increment"> + </button>
    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
    </div>
    <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
    </div>
  `
}

function factory({data} = { data:{} }) {
  return mount(App,{
    data(){
      return data
    }
  })
}

describe('App', () =>{
  it('render count when even', ()=>{
    const wrapper = factory({
      data:{
        count: 2
      }
    })

    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })

  it('render count when odd', async ()=>{
    const wrapper = factory()
    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})

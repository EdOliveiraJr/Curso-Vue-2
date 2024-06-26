import { mount } from "@vue/test-utils";

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
  it('render count when even', async ()=>{
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })

  it('render count when odd', async ()=>{
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})

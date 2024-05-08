import { mount } from "@vue/test-utils";
import App from "./App.vue";
import { reactive } from "vue";

function factory() {
  const state = reactive({ count: 0})
  return mount(App, {
    global: {
      provide: {
        'store': {
          state,
          commit: () => {
            state.count++
          }
        }
      }
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

import { mount } from "@vue/test-utils";

const App2 = {
  props: {
    count: {
      type: Number
    }
  },
  template:`<div>Count: {{ count }}</div>`
}


test('App2', () =>{
  const wrapper = mount(App2, {
    props: {
      count: 1
    }
  })
  expect(wrapper.html()).toContain('Count: 1')

})

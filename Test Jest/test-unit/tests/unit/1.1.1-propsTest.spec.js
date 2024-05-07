import { mount } from "@vue/test-utils";

const App = {
  props: {
    count: {
      type: Number
    }
  },
  template:`
    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
    </div>
    <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
    </div>
  `
}


test('App', () =>{
  const wrapper = mount(App, {
    props: {
      count: 1
    }
  })
  expect(wrapper.html()).toContain('Count: 1. Count is odd.')

})

import { mount } from "@vue/test-utils";

const App = {
  template:`<div>Hello</div>`
}

test('App', () =>{
  const wrapper = mount(App)
  expect(wrapper.html()).toBe('<div>Hello</div>')

})
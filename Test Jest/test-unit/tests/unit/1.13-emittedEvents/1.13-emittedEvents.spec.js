import { mount } from "@vue/test-utils";
import App from "./App.vue";

test('emits a count event with correct payload', async ()=>{
  const wrapper = mount(App)
  
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().count[0][0]).toBe(1)
  
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().count[1][0]).toBe(2)  
})
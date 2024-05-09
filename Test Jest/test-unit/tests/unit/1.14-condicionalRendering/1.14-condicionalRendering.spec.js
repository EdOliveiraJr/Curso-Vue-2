import { mount } from "@vue/test-utils";
import App from "./App.vue";

/*
  case v-if -> use .exists()
  case v-show -> use .isVisible()
*/

describe('App', () => {
  it('renders a profile link', () => {
    const wrapper = mount(App)
    expect(wrapper.find('#profile').text()).toBe('My Profile')
  })

  it('renders a admin link', () => {
    const wrapper = mount(App, {
      data() {
        return {
          admin: true
        }
      },
    })
    expect(wrapper.find('#admin').isVisible()).toBe(true)
  })

  it('does not renders a admin link', () => {
    const wrapper = mount(App)
    expect(wrapper.find('#admin').isVisible()).toBe(false)
  })
  
})
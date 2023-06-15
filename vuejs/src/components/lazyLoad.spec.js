describe('lazyLoad.vue',()=>{
    test('setup correctly',()=>{
        expect(true).toBe(true)
    })
})


import { mount } from '@vue/test-utils';
import LazyLoad from '@/components/lazyLoad.vue';

describe('LazyLoad', () => {
  it('renders the component', () => {
    const wrapper = mount(LazyLoad);
    expect(wrapper.exists()).toBe(true);
  });

  it('generates imageIds1 correctly', () => {
    const wrapper = mount(LazyLoad);
    const imageIds1 = wrapper.vm.imageIds1;
    expect(imageIds1.length).toBe(2);
  });

  it('generates imageIds2 correctly', () => {
    const wrapper = mount(LazyLoad);
    const imageIds2 = wrapper.vm.imageIds2;
    expect(imageIds2.length).toBe(2);
  });

  it('updates imageIds1 and imageIds2 after a specific interval', async () => {
    jest.useFakeTimers();
    const wrapper = mount(LazyLoad);

    const initialImageIds1 = wrapper.vm.imageIds1;
    const initialImageIds2 = wrapper.vm.imageIds2;

    jest.advanceTimersByTime(8000);

    await wrapper.vm.$nextTick();

    const updatedImageIds1 = wrapper.vm.imageIds1;
    const updatedImageIds2 = wrapper.vm.imageIds2;

    expect(updatedImageIds1).not.toEqual(initialImageIds1);
    expect(updatedImageIds2).not.toEqual(initialImageIds2);
  });
});

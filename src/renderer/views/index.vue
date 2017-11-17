<template>
  <div>
    <tool-bar></tool-bar>
    <div class="carousel-box">
      <Carousel autoplay v-model="value1" loop>
        <CarouselItem>
          <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>
<script>
import ToolBar from '@/components/ToolBar'
export default {
  name: 'Index',
  data() {
    return {
      value1: 0
    }
  },
  components: {
    ToolBar
  }
}
</script>
<style scoped>
  .carousel-box {
    width: 100%;
    min-height: 100px;
    margin-top: 1em;
  }
  .demo-carousel {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to top right, darkblue, lightskyblue);
    color: white;
    font-size: 24px;
  }
</style>



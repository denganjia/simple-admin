<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from 'vue'
export default defineComponent({
  name: 'RenderIcon',
  props: {
    icon: { type: Function as PropType<(() => void)> }
  },
  render() {
    if (this.icon) {
      return this.icon()
    } else {
      return null
    }
  }
})
</script>


<style scoped lang="scss">
</style>
<template>
  <div @click="onClick">
    <div class="inline field">
      <label>Title: </label>
      <span>{{rowData.title}}</span>
    </div>
    <div class="inline field">
      <label>Url: </label>
      <span>{{rowData.url}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick (event) {
      console.log('my-detail-row: on-click', event.target)
    }
  },
}
</script>

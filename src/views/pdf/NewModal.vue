<template>
  <div :class="['ui dimmer page transition', { 'visible active': visible}]">
    <div :class="['ui small modal transition', { 'visible active': visible}]" id="settingsModal">
      <i class="close icon" @click="hide"></i>
      <div class="header">Add Pdf</div>
      <div class="content ui form">

        <div class="inline fields">

          <div class="field">
            <label>Title:</label>
            <br>
            <input type="text" v-model="$parent.tableHeight">
          </div>
        </div>
        <div class="ui divider"></div>
       <div class="field">
            <label>Url:</label>
            <br>
            <input type="text" v-model="$parent.tableHeight">
        </div>
        

      </div>
      <div class="actions">
        <div class="ui cancel button" @click="hide">Close</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['vuetableFields'],

  data() {
    return {
      visible: false
    };
  },

  computed: {
    vuetable() {
      return this.$parent.$refs.vuetable
    }
  },

  methods: {
    getFieldTitle(field) {
      if (typeof field.title === "function") return field.title(true);

      let title = field.title;
      if (title !== "") return this.stripHTML(title);

      return title;
    },

    stripHTML(str) {
      return str ? str.replace(/(<([^>]+)>)/gi, "") : "";
    },

    toggleField(field, event) {
      this.vuetable.toggleField(field.$_index);
    },

    show() {
      this.visible = true;
    },

    hide() {
      this.visible = false;
    }
  }
};
</script>

<style>
#NewModal {
  top: 60px;
}
</style>

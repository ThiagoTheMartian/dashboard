
import VuetableFieldHandle from "vuetable-2/src/components/VuetableFieldHandle.vue";
import VuetableFieldSequence from "vuetable-2/src/components/VuetableFieldSequence.vue";


export default [
  {
    // name: '__handle',
    name: VuetableFieldHandle,
    width: "40px"
  },
  {
    name: VuetableFieldSequence,
    title: "No.",
    width: "50px",
    titleClass: "right aligned",
    dataClass: "right aligned"
  },
  
  {
    name: "id",
    title: '<i class="grey unordered list icon"></i>',
    width: "40px",
    titleClass: "center aligned",
    dataClass: "center aligned",
    formatter: (value, vuetable) => {
      let icon = vuetable.isVisibleDetailRow(value) ? "down" : "right";
      return [
        '<a class="show-detail-row">',
        '<i class="chevron circle ' + icon + ' icon"></i>',
        "</a>"
      ].join("");
    }
  },
  {
    name: "title",
    sortField: "title",
    title: '<i class="grey user outline icon"></i>Title',
    width: "20%",
    filterable: true,
    togglable: true
  },
  {
    name: "url",
    sortField: "url",
    title: '<i class="grey mail outline icon"></i>Url',
    width: "20%",
    filterable: true,
    togglable: true
  },
  {
    name: "custom-actions",
    title: "Actions",
    width: "15%",
    titleClass: "center aligned",
    dataClass: "center aligned"
  }
];

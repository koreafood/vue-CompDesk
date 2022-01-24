<template>
  <div class="page">
    <p>GridBase --> {{ msg }}</p>
    <div :id="gridId" ref="gridBase" style="height: 230px"></div>
  </div>
</template>

<script>
import _ from 'lodash';
import { GridView, LocalDataProvider, ValueType } from 'realgrid';
export default {
  name: 'GridBase',
  props: {
    msg: String,
  },
  created() {
    this.gridId = _.uniqueId('grid_');
    this.list = [
      { ROWNO: '1', WEEK: 'w1' },
      { ROWNO: '2', WEEK: 'w2' },
    ];
  },
  mounted() {
    this.gridInit();
  },
  methods: {
    data() {
      return {
        gridId: null,
        dataProvider: null,
        gridView: null,
      };
    },
    gridInit() {
      this.dataProvider = new LocalDataProvider(false);
      this.gridView = new GridView(this.gridId);
      this.gridView.setDataSource(this.dataProvider);

      const fields = [
        {
          fieldName: 'ROWNO',
          dataType: ValueType.TEXT,
        },
        {
          fieldName: 'WEEK',
          dataType: ValueType.TEXT,
        },
      ];
      const columns = [
        {
          fieldName: 'ROWNO',
          name: 'ROWNO',
          type: 'data',
          width: '260',
          header: {
            text: 'Item',
          },
        },
        {
          fieldName: 'WEEK',
          name: 'WEEK',
          type: 'data',
          width: '260',
          header: {
            text: 'WEEK',
          },
        },
      ];
      this.dataProvider.setFields(fields);
      this.gridView.setColumns(columns);
      this.dataProvider.setRows(this.list);
      console.log('list', this.list);
    },
  },
};
</script>
<style scoped>
.page {
  color: #42b983;
}
</style>

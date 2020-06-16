import Vue from 'vue';

import DxValidator, {
    DxRequiredRule,
    DxEmailRule,
    DxPatternRule,
} from 'devextreme-vue/validator'

Vue.component('DxValidationGroup', DxValidationGroup)
Vue.component('DxValidator', DxValidator)
Vue.component('DxRequiredRule', DxRequiredRule)
Vue.component('DxEmailRule', DxEmailRule)
Vue.component('DxPatternRule', DxPatternRule)

import { DxTextBox, DxTagBox, DxNumberBox, DxDateBox, DxCheckBox, DxLookup, DxRadioGroup, DxTextArea, DxSelectBox, DxTooltip, DxValidationGroup, DxButton } from 'devextreme-vue';
Vue.component('DxTextBox', DxTextBox)
Vue.component('DxTagBox', DxTagBox)
Vue.component('DxNumberBox', DxNumberBox)
Vue.component('DxDateBox', DxDateBox)
Vue.component('DxCheckBox', DxCheckBox)
Vue.component('DxLookup', DxLookup)
Vue.component('DxRadioGroup', DxRadioGroup)
Vue.component('DxTextArea', DxTextArea)
Vue.component('DxSelectBox', DxSelectBox)
Vue.component('DxTooltip', DxTooltip)
Vue.component('DxButton', DxButton)


import {
    DxPopup
} from 'devextreme-vue/popup';

Vue.component('DxPopup', DxPopup)

import {
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel,
    DxPager,
    DxPaging,
    DxSearchPanel,
    DxFilterRow,
    DxSorting,
    DxRemoteOperations,
} from 'devextreme-vue/data-grid';

Vue.component('DxDataGrid', DxDataGrid)
Vue.component('DxColumn', DxColumn)
Vue.component('DxGrouping', DxGrouping)
Vue.component('DxGroupPanel', DxGroupPanel)
Vue.component('DxPager', DxPager)
Vue.component('DxPaging', DxPaging)
Vue.component('DxSearchPanel', DxSearchPanel)
Vue.component('DxFilterRow', DxFilterRow)
Vue.component('DxSorting', DxSorting)
Vue.component('DxRemoteOperations', DxRemoteOperations)

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

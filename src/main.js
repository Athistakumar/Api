import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';


const app = createApp(App)
app.use(PrimeVue)
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import axios from 'axios'
import VueAxios from 'vue-axios'

app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("ColumnGroup", ColumnGroup)

app.use(VueAxios, axios)
app.mount('#app')
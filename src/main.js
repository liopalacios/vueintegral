import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
createApp(App).use(router).mount('#app')

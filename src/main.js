import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ReportUsModal from './plugins/ReportUs/report-us.js'
import reverse from './plugins/Reverse/reverse'


const app = createApp(App);
app.use(ReportUsModal);
app.use(reverse);

app.mount('#app');


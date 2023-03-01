import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { defineCustomElement as defineSearchInterface } from '@coveo/atomic/dist/components/atomic-search-interface';
import { defineCustomElement as defineAria } from '@coveo/atomic/dist/components/atomic-aria-live';
import { defineCustomElement as defineSearchLayout } from '@coveo/atomic/dist/components/atomic-search-layout';
import { defineCustomElement as defineSearchBox } from '@coveo/atomic/dist/components/atomic-search-box';
defineAria();
defineSearchInterface();
defineSearchLayout();
defineSearchBox();
createApp(App).mount('#app')

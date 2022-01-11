import { customElement } from 'aurelia';


import elementTemplate from './my-app.html';
import style from './my-app.scss';

const template = `<style>${style}</style>${elementTemplate}`;

@customElement({
    'name': 'my-app',
    template
})
export class MyApp {
    message = '<b>Hello World!</b>';

    
}

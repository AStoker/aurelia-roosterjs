import { bindable, customElement } from 'aurelia';

import * as roosterjs from 'roosterjs';

import elementTemplate from './text-editor.html';
import style from './text-editor.scss';

const template = `<style>${style}</style>${elementTemplate}`;

@customElement({
    'name': 'text-editor',
    template
})
export class TextEditor {
    @bindable text;

    attached() {
        this.editor = roosterjs.createEditor(this.editorDiv);
        this.editor.setContent(this.text);
    }

    toggleBold() {
        roosterjs.toggleBold(this.editor);
    }
    toggleItalic() {
        roosterjs.toggleItalic(this.editor);
    }
    toggleUnderline() {
        roosterjs.toggleUnderline(this.editor);
    }
}
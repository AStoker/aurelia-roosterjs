import { bindable } from 'aurelia';

import * as roosterjs from 'roosterjs';


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
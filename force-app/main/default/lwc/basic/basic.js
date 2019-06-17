import { LightningElement, track } from 'lwc';

export default class Test02 extends LightningElement {
    @track activeSectionMessage = '';

    handleToggleSection(event){
        this.activeSectionMessage =
            'Open section name : ' + event.detail.openSections;
    }

    handleSetActiveSectionC(){
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }
}
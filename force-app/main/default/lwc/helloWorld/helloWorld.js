import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    
    fullname ='salesforce India';
    title ='aura';

    changeHandler(event){
        //perform logic
        this.title = event.target.value;
     }

}

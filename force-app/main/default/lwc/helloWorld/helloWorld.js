import { LightningElement , track } from 'lwc';

export default class HelloWorld extends LightningElement {    
    fullname ='salesforce India';
    title ='aura';
                       
    @track Address ={
        Name : 'kamran',
        age : '25',
        City : 'Ranchi'
    }
    changeHandler(event){
        //perform logic
        this.title = event.target.value;
     }
     trackHandler(event){
        this.Address.City = event.target.value;
     }

     userName = ['john', 'smith' , 'karen']; 
     num = 10;
     num2 = 17;
     get firstUser()
     {
        return this.userName[0];
     }
     get Multiply(){
     
     return this.num * this.num2;
     }

}



                                                        



                                                        



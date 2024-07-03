class Stack{
    constructor(){
        this.top=-1;
        this.items={}
    }

    get peek(){
        return this.items[this.top];
    }
    push(value){
        this.top +=1;
        this.items[this.top] = value; 
    }

    pop(){
        if(this.top > 1){
            this.items.remove(0);
            this.top --;
        }
        
        return 0;
    }
   
   

}

describe('My Stack' , ()=> {
    let stack;
    beforeEach(()=> {
         stack = new Stack();
    });


    it('is created empty',()=>{
        

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top',() => {
        stack.push("lina");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("lina")
    });
    it('can pop',() => {
        stack.pop();
        expect(stack.top).toBe(-1);
        
    });
    
})
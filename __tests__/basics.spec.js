test("addition", ()=>{
    expect(2+2).toBe(4);
}); 


test("null", ()=>{
    const i = null;
    expect.assertions(2); //expexting test 
    expect(i).toBeNull();
    expect(i).toBeDefined();
}); 

const animals = ['dog','cat'];

test("annimals array", ()=>{
    expect(animals).toContain("cat");
    expect(animals).toBeInstanceOf(Array);
})

function getAnimations(){
    throw new Error("404 Not found");
}


test("getAnimations", ()=>{
    expect(()=>getAnimations()).toThrow("404 Not found");
});
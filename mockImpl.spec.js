test("mockImplementation", ()=>{
    const mockFn = jest
    .fn(()=>"default")
    .mockImplementation(()=>"First call to mockImplementation")
    .mockImplementation(()=>"Seconde call to mockImplementation")
    .mockImplementation(()=>"third call to mockImplementation");
    const res1 = mockFn();
    const res2 = mockFn();
    const res3 = mockFn();

    console.log("mockImplementation", res1);
    console.log("mockImplementation", res2);
    console.log("mockImplementation", res3);
})



test("mockImplementationOnce", ()=>{
    const mockFn = jest
    .fn(()=>"default")
    .mockImplementationOnce(()=>"First call to mockImplementationOnce")
    .mockImplementationOnce(()=>"Seconde call to mockImplementationOnce")
    .mockImplementationOnce(()=>"third call to mockImplementationOnce");
    const res1 = mockFn();
    const res2 = mockFn();
    const res3 = mockFn();

    console.log("mockImplementationOnce", res1);
    console.log("mockImplementationOnce", res2);
    console.log("mockImplementationOnce", res3);
})

describe("Test Results", () => {
    it("Test sum ", () => {
        assert.equal(sum([1, 4, 5]), 10); 
    });

    it("Test multiply " , () => {
        assert.equal(multiply([2,2,3,3]), 36); 
    });


    it("Test reverse" , () => {
        assert.equal(reverse("JavaScript"), "tpircSavaJ"); 
    });

    it("Test filterLongWords "  , () => {
        assert.equal(filterLongWords(['Tewodroes', 'Teddy', 'Jack','Alexis'], 4).length, 3); 
    });

});
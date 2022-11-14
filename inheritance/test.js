window.onload = tester;

function tester(){
    describe("Prototype Test", () => {
        it("Filter Bad Word Test", () => {
          assert.equal(
            "This house is not nice!".filter("not"),
            "This house is  nice!"
          );
        });
        it("Bubble Sort Test", () => {
          assert.equal([6, 4, 0, 3, -2, 1].bubbleSort().toString, [-2, 0, 1, 3, 4, 6].toString);
        });
        it("Teacher Teach Method", () => {
          assert.equal(te.teach("Inheritance"), "Alice is now teaching Inheritance");
        });
      });
      mocha.run();
}





 
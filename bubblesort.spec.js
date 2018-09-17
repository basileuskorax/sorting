// beforeAll(function() {
//   spyOn(tootsiepop, "lick").and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it("getting to the center of tootsiepop involves exactly three licks", function() {
//   tootsiepop.getToCenter();
//   expect(tootsiepop.lick.calls.count()).toEqual(3);
// });

describe("Bubble Sort", function() {
  // beforeAll(function() {
  //   spyOn(bubbleSort, "swap").and.callThrough();
  // });
  // it("uses swap", function() {
  //   expect(bubbleSort.swap.calls.count()).toEqual(2);
  // });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sorts an array", function() {
    // expect( bubbleSort([4,2,6,7,3,1,8,9,5]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
    expect(bubbleSort([2, 3, 6, 4, 5])).toEqual([2, 3, 4, 5, 6]);
  });
});

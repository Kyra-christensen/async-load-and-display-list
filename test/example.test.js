// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCandy } from '../render-utils.js';
const test = QUnit.test;

test('renderCandy should return a DOM element', (expect) => {
    //Arrange
    let candy = 
    {
        name: 'skittles',
        color: 'rainbow',
        price: '3.99',
    };
    // Set up your arguments and expectations
    const expected = '<div class="candy-detail"><p class="name">skittles</p><p class="color">rainbow</p><p class="price">3.99</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCandy(candy);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'renderCandy returns a div');
});

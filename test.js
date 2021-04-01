let uri='/image/image1.png';

const tempUri=uri.split('/');

let lastItem = tempUri.pop();

let newUri='/image'+'/desktop'+'/lastItem';

console.log('newuri'+newUri);


//tempUri.splice(2, 0, 'desktop');

console.log(tempUri);
//target uri='image/desktop/image1.png'

const suits = ["hearts", "clubs", "Brooks Brothers", "diamonds", "spades"];

suits.splice(2, 0, 'newItem');

console.log(suits);

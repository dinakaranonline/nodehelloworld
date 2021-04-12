//let uri='/image/image1.png';
let uri='/media/folder1/folder11/folder111/barbie-happy-birthday-doll.jpg';

const tempUri=uri.split('/media');

let lastItem = tempUri.pop();

console.log('last item'+lastItem);
//let newUri='/image'+'/desktop'+'/lastItem';

let finalURI= '/media/desktop'+lastItem;

console.log('finalURI'+finalURI);

let newUri='/media/desktop/folder1/folder11/folder111/barbie-happy-birthday-doll.jpg';

console.log('newuri'+newUri);


tempUri.splice(2, 0, 'desktop');

console.log('final uri'+tempUri);
//target uri='image/desktop/image1.png'

const suits = ["hearts", "clubs", "Brooks Brothers", "diamonds", "spades"];

suits.splice(2, 0, 'newItem');

console.log(suits);

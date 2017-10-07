import '../scss/index.scss';
import './landingPage.js';

require.context('../images', false, /\.(jpe?g|png|gif|svg)/); //import all images so file-loader can work






//this is webpack entry point but react app is created on callback from landingPage.js

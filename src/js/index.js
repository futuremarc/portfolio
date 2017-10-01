
import '../scss/clouds.scss';
import '../scss/index.scss';
import './lightRays.js';
require.context('../images', false, /\.(jpe?g|png|gif|svg)$/i); //import all images so file-loader can work its magic

//this is entry point but react app is created on callback from lightrays

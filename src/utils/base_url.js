const BASE_URL = process.env.NODE_ENV === 'development' ? '/proxy' : '/fdl';

export default BASE_URL;
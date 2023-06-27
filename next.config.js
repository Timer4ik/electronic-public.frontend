const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      "http://localhost:5000"
    ],
  },
};
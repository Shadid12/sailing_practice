module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    
    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },
    
    encryptedPassword: {
  		type: 'string',
  		required:true
  	}
  }
};


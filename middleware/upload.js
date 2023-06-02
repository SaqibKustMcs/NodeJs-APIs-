const path=require('path');
const multer=require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        let ext=path.extname(file.originalname);
      cb(
        null,
     Date.now() + ext
      );
    },
  });
  
  let upload = multer({
    storage: storage,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype=="image/png"||  file.mimetype=="image/jpg"
        ){
            callback (null,true)
        }{
            console.log("only png or jpg file supported")
            callback (null,false)
        }
    },
    limits :{
        fieldSize:1024 * 1024 * 2
    }
    

  });
  module.exports=upload
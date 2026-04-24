import multer from 'multer'

const storage = multer.diskStorage({
    destination:function(req, file, cd){
        cb(null, "public")
    },
    filename: function(req, file, cb){
        const filename =Date.now() +"-"+ file.originalname;
        cb(null,filename)   
    }
})

export const upload =multer({
    storage, 
    limits:{fileSize: 5*1024*1024}, //5MB limit
});
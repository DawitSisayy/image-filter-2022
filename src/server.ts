
import express from 'express';
import bodyParser from 'body-parser';
import {Router, Request, Response} from 'express';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import fs from 'fs';
import Jimp from 'jimp';
import URL from 'url';


(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
/*
  app.get('/filteredimage', async (req: Request, res: Response) => {
    const image_url = req.query.image_url.toString();
    if (!image_url) {
      res.status(400).send('Image url is required');
    }

    const filtered_image = await filterImageFromURL(image_url);

    res.status(200).sendFile(filtered_image, () => {
      deleteLocalFiles([filtered_image]);
    });

    
  });




/*
  return new Promise(async (resolve, reject) => {
    try {
        const photo = await Jimp.read(image_url);
        const outpath = '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';
        await photo
            .resize(256, 256) // resize
            .quality(60) // set JPEG quality
            .greyscale() // set greyscale
            .write(__dirname + outpath, (img) => {
                resolve(__dirname + outpath);
            });

    } catch (error) {
                    const photo = await Jimp.read(image_url);
        const outpath = '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';
        await photo
            .resize(256, 256) // resize
            .quality(60) // set JPEG quality
            .greyscale() // set greyscale
            .write(__dirname + outpath, (img) => {
                resolve(__dirname + outpath);
            });
    }
});

*/








  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
  
})();



/*
import express from 'express';
import bodyParser from 'body-parser';
import URL from 'url';
import {filterImageFromURL, deleteLocalFiles,validateUrl} from './util/util';
import fs from 'fs'


(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  let filteredimageFilePath: string = ""; 

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]


  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  
  app.get("/filteredimage", async (req, res) => {
try{
    if(req.query && req.query.image_url && validateUrl(req.query.image_url )) {
       let image_url = req.query.image_url;
       let filteredimageFilePath = await filterImageFromURL(image_url);
         //res.status(200).json({"filePath":image_url});
         res.status(200).sendFile(filteredimageFilePath);
     }
    } catch (error) {
      return error
    }

     // deleteLocalFiles([filteredimageFilePath]);

     // delete a file using a different approach
     fs.unlink (filteredimageFilePath, (err) => {
     if (err) {
      throw err;
      }
    });
});

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();

function typeOf(image_url: any): any {
  throw new Error('Function not implemented.');
}

/**************************************************************************** */
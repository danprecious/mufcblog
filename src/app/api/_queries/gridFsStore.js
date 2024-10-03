import os from "os";
import path, { resolve } from "path";
import fs from "fs";

import { MongoClient, GridFSBucket } from "mongodb";

const mongoURI = process.env.DATABASE_URL;

const client = new MongoClient(mongoURI);
const db = client.db("mufcblog-local");
const bucket = new GridFSBucket(db, { bucketName: "coverImages" });



export const uploadCoverImage = async (file) => {
    
  const uniqueFileName = new Date().getTime() + "-" + file.name;

  const tempFilePath = path.join(os.tmpdir(), uniqueFileName);

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(tempFilePath, buffer);

  const uploadStream = bucket.openUploadStream(uniqueFileName);

  return new Promise((resolve, reject) => {

      fs.createReadStream(tempFilePath)
      .pipe(uploadStream)
      .on("error", () => {
          console.log("An error occured while uploading");
        })
        .on("finish", () => {
            console.log("Cover image uploaded succesfully");
            const fileId = uploadStream.id;
            console.log(fileId);
            fs.unlinkSync(tempFilePath);
            resolve(fileId);
        });
    } )

};

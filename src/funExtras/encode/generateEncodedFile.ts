import * as fs from "fs";
import {encode} from './encode';

const generateEncodedFile = (data: string, fileName: string) => {
  const encodedString = encode(data);
  fs.writeFileSync(`./generated/${fileName}`, encodedString);
}
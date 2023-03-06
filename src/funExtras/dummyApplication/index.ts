/**
 * create a calculator service, does all simple operations
 * create a rest API hosted through express
 * put files in a common folder structure
 * 
 * 
 */

import * as express from 'express';
import { Addition } from './operations/Addition';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/calculation/', (req, res) => {
    try {
       const performCalculation=require(`./operations/${req.body.op}`);
       const terms: string[] = req.body.terms.split('');
       const intTerms = terms.map(term => parseInt(term));

       performCalculation(terms);
    }
    catch(error){
        console.error(error);
    }
    // console.log('req: ', req.body);
    // let operation = req.body.op;
    // let num1 = req.body.num1;
    // let num2 = req.body.num2;

    //     res.send(
    //         { 
    //             response: addition(parseInt(num1), parseInt(num2)),
    //             status: 200
    //         });
    // } else {
    //     res.error('what the fudge!'); 
    // }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
/**
 * create a calculator service, does all simple operations
 * create a rest API hosted through express
 * put files in a common folder structure
 * 
 * 
 */

import * as express from 'express';
import { addition } from './addition';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/calculation/', (req, res) => {
    console.log('req: ', req.body);
    let operation = req.body.op;
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(operation === 'addition') {
        res.send(
            { 
                response: addition(parseInt(num1), parseInt(num2)),
                status: 200
            });
    } else {
        res.error('what the fudge!'); 
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
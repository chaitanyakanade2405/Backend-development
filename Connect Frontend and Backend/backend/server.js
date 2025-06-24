import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready!');
 });

 app.get('/api/job', (req, res) => {
    const job = [{
        id: 1,
        title: 'Software Engineer',
        description: 'Develop and maintain web applications.',
    }
    , {
        id: 2,
        title: 'Data Scientist',
        description: 'Analyze data and build predictive models.',
    },{
        id: 3,
        title: 'Product Manager',
        description: 'Oversee product development and strategy.',       
     }];
    res.json(job);
 });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
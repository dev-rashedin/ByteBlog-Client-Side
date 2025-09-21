const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { StatusCodes } = require('http-status-toolkit');
const { notFoundHandler, globalErrorHandler } = require('express-error-toolkit');

require('dotenv').config();

const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://byteblog-da679.web.app',
    'https://byteblog-da679.firebaseapp.com',
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// custom middleware
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;

   if (!token) return res.status(401).send({ message: 'Unauthorized' });

   jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
     if (error) {
       console.log(error)
       
       return res.status(401).send({ message: 'Unauthorized access' });
     }
     req.user = decoded.email;
     
     console.log(decoded.email)
     
     return next();
   });
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4qgkjzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const cookieOption = {
  httpOnly: true,
  secure: true,
  sameSite: 'none',
  maxAge: 60 * 60 * 1000,
  // secure: process.env.NODE_ENV === 'production',
  // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db('byteBlogDB').collection('users');
    const postCollection = client.db('byteBlogDB').collection('posts');
    const commentCollection = client.db('byteBlogDB').collection('comments');
    const wishlistCollection = client.db('byteBlogDB').collection('wishlists');

    // auth related api
    app.post('/jwt', async (req, res) => {
      const loggedUser = req.body;

      const token = jwt.sign(loggedUser, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '7d',
      });

      res.cookie('token', token, cookieOption).send({ success: true });
    });

    // clear token on logout
    app.post('/logout', (req, res) => {
      res
        .clearCookie('token', { ...cookieOption, maxAge: 0 })
        .send({ success: true });
    });

    //add user to the db
    app.post('/users', async (req, res) => {
      try {
        const user = req.body;

        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        console.log(error);
      }
    });

    // get all the post based on query
    app.get('/all-posts', async (req, res) => {
      const size = parseInt(req.query.size);
      const page = parseInt(req.query.page);
      const filter = req.query.filter;
      const sort = req.query.sort;
      const search = req.query.search;

      let query = {
        post_title: { $regex: search, $options: 'i' },
      };

      if (filter) query.category = filter;

      let options = {};

      if (sort) options = { sort: { createdAt: sort === 'asc' ? 1 : -1 } };
try {
  
      const result = await postCollection
        .find(query, options)
        .skip((page - 1) * size)
        .limit(size)
        .toArray();

      res.send(result);
} catch (error) {
  console.log('Error', error)
  
}
    });

    // get the post count
    app.get('/postCount', async (req, res) => {
      const filter = req.query.filter;
      const search = req.query.search;

      let query = {
        post_title: { $regex: search, $options: 'i' },
      };

      if (filter) query.category = filter;

      try {
        const count = await postCollection.countDocuments(query);

        res.send({ count });
      } catch (error) {
        console.error('Error fetching post count:', error);
        res.status(500).send({ error: 'Failed to fetch job count' });
      }
    });

    // getting recent blog posts
    app.get('/recent-posts', async (req, res) => {
      const sortedData = await postCollection
        .find()
        .sort({ createdAt: -1 })
        .toArray();

      res.send(sortedData);
    });

    // getting recent blog posts
    app.get('/featured-posts', async (req, res) => {
      const sortedData = await postCollection
        .aggregate([
          {
            $addFields: {
              descriptionLength: { $strLenCP: '$long_description' },
            },
          },
          {
            $sort: { descriptionLength: -1 },
          },
        ])
        .toArray();

      res.send(sortedData);
    });

    // getting a blog data by id
    app.get('/posts/:id', async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };

      const result = await postCollection.findOne(query);
      res.send(result);
    });

    // creating a new blog
    app.post('/posts', async (req, res) => {
      const postData = req.body;

      const result = await postCollection.insertOne(postData);

      res.send(result);
    });

    // updating new blog
    app.patch('/posts/:id', async (req, res) => {
      const id = req.params.id;
      const postData = req.body;

      const query = { _id: new ObjectId(id) };

      const updatedDoc = {
        $set: {
          ...postData,
        },
      };

      const result = await postCollection.updateOne(query, updatedDoc);

      res.send(result);
    });

    // comment related api

    // getting all comment by blog id
    app.get('/comments/:id', async (req, res) => {
      const id = req.params.id;

      const query = { blog_id: id };

      try {
        const result = await commentCollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    });

    // creating a new comment
    app.post('/comments', async (req, res) => {
      const comment = req.body;

      const result = await commentCollection.insertOne(comment);

      res.send(result);
    });

    // wishlist related api

    // get wishlist by email
    app.get('/wishlists/:email', async (req, res) => {
      const email = req.params.email;

      const query = { viewer_email: email };

      const result = await wishlistCollection.find(query).toArray();

      res.send(result);
    });

    // creating a new wishlist
    app.post('/wishlists', async (req, res) => {
      const wishlist = req.body;
      // console.log(wishlist);

      try {
        const existingWishlist = await wishlistCollection.findOne({
          _id: wishlist._id,
        });
        if (!existingWishlist) {
           try {
             const result = await wishlistCollection.insertOne(wishlist);

             res.send(result);
           } catch (error) {
             console.error('Error inserting wishlist:', error);
             res.status(500).send({ message: 'Internal Server Error' });
           }
        } else {
          res.status(500).send({ message: 'Already added to wishlist' });
        }
      } catch (error) {
        
      }

   
    });

    // deleting wishlist
    app.delete('/wishlists/:id', async (req, res) => {
      const id = req.params.id;

      const query = { _id: id };

      try {
        const result = await wishlistCollection.deleteOne(query);

        res.send(result);
      } catch (error) {
        console.error('Error inserting wishlist:', error);
        res.status(500).send({ message: 'Internal Server Error' });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      // 'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('ByteBlog server is running');
});

app.use(notFoundHandler);
app.use(globalErrorHandler)

app.listen(port, () => {
  console.log('ByteBlog server is running');
});

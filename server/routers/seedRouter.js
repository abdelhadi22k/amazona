

import express from 'express';
import data from '../data.js';
import Project from '../model/project.js';
import Opinions from '../model/opinion.js';
import Blog from '../model/blog.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Remove existing projects if needed (uncomment if required)
    // await Project.deleteMany({});
    
    // Insert new projects
    const createdProjects = await Blog.insertMany(data.blog);
    res.send({ createdProjects });
  } catch (error) {
    res.status(500).send({ message: 'Error creating projects', error });
  }
});

export default router;

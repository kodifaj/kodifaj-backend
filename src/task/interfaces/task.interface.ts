import { Document } from 'mongoose';
import { Solution } from '../../solution/interfaces/solution.interface';

export interface Task extends Document {
  _id: string;
  content: string;
  repo: string;
  createdAt: string;
  images: string[];
  tips: string[];
  tags: string[];
  title: string;
  _user: {
    _id: string;
    login: string;
  };
  _solutions: Solution[];
}
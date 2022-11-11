/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';

export interface CommentProp {
  comments: Comment[];
}


export interface Comment {
  comment: string;
  id: string;
  date?: number;
}

export interface SortActionButton {
  display: 'descending' | 'ascending';
  value: string;
}

export interface Quote {
  key?: string;
  author: string;
  quote: string;
  date: number;
}
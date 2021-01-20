/* eslint-disable no-undef */
/**
 * @jest-environment node
 */
import 'regenerator-runtime/runtime';

const supertest = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const app = require('../server/index');

beforeEach((done) => {
  mongoose.connect('mongodb://localhost/recommended',
    {
      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true,
    }, () => done());
});

afterAll((done) => {
  mongoose.connection.close(() => done());
});

test('GET /api/recommended', async (done) => {
  const response = await supertest(app).get('/api/recommended');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(typeof response.body[0].name).toBe('string');
  expect(typeof response.body[0].reviews).toBe('number');
  expect(response.body[0].liked).toBe(false);
  done();
});

test('GET /api/recommended/:id', async (done) => {
  let id = '60087a64e722d554ee6aa016';

  let response = await supertest(app).get(`/api/recommended/${id}`);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.body[1]).toBe(undefined);
  expect(response.body[0].name).toBe('Akeem Mountains');
  expect(response.body[0].liked).toBe(false);

  id = 'testing123456';
  response = await supertest(app).get(`/api/recommended/${id}`);
  expect(response.status).toBe(400);
  done();
});

test('PUT /api/recommended/:id', async (done) => {
  const id = '60087a64e722d554ee6aa021';
  const currentLiked = { liked: false };

  const response = await supertest(app).put(`/api/recommended/${id}`, currentLiked);
  expect(response.status).toBe(200);
  expect(typeof response.body).toBe('object');
  expect(response.body.liked).toBe(true);
  done();
});

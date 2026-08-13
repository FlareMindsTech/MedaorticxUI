import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Hero } from '../components/hero/Hero';
import { ServicesGrid } from '../components/services/ServicesGrid';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <ServicesGrid />
    </PageTransition>
  );
};

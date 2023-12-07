import React from 'react';
import {Button} from '@/components/Button';

const AboutUsPage = () => {

  return (
    <div>
      <h1>This is About Us page</h1>
      <Button>Normal</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
};

export default AboutUsPage;


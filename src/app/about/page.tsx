'use client';
import { useState } from 'react';
import Trips from './components/Trips';

export const metadata = {
  title: 'About',
};

const Page = () => {
  const [name, setName] = useState();
  return (
    <div>
      <Trips />
    </div>
  );
};

export default Page;

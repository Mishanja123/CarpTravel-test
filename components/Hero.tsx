// components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    <div className="bg-cover pt-28 bg-center h-screen" style={{backgroundImage: 'url(/images/background/home-background.png)'}}>

      <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
      <div className='relative container'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, nemo dignissimos eius veniam tenetur temporibus nobis culpa odit deserunt maiores molestias dolore reiciendis id vitae sed quam. Velit, ad sunt?
      </div>
    </div>
  );
}

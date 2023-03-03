import * as React from 'react';
import MainDiv from './components/MainDiv';
import Navbar from './components/Navbar';
import { AddToCartProvider } from './context/AddToCartContext';
import './style.css';

export default function App() {
  return (
    <AddToCartProvider>
      <Navbar />
      <MainDiv />
    </AddToCartProvider>
  );
}

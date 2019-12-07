import React from 'react';
import SearchInput from './SerarchInput';

export default { title: 'SearchInput' };

const placeholder1 = "Buscar o empezar un chat nuevo";
const placeholder2 = "Buscar contacto";

export const SimpleInput = () => <SearchInput placeholder={placeholder1} />;
export const SimpleInputTwoo = () => <SearchInput placeholder={placeholder2} />;

import { useContext } from 'react';
import { GasSystemContext } from '../contexts/GasSystemContext';

export const useGasSystem = () => {
  return useContext(GasSystemContext);
};
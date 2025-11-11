import React from 'react'
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import styles from './LoadingOverlay.module.css';

export default function LoadingOverlay() {
   const loading = useSelector((state) => state.homeWithOrdering.loading);
  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <ClipLoader color="#C78E50" size={100} />
    </div>
  );
}

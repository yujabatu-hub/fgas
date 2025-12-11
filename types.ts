import React from 'react';

export type SectionVariant = 'default' | 'light' | 'red';

export interface SectionProps {
  title: string;
  variant?: SectionVariant;
  id?: string;
  children: React.ReactNode;
}

export interface ImageFrameProps {
  src: string;
  alt?: string;
  className?: string;
}
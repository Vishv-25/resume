// Type definitions for react-motion
declare module 'react-motion' {
  import * as React from 'react';

  // Motion
  export type MotionProps = {
    defaultStyle?: { [key: string]: number };
    style: { [key: string]: number | { val: number; stiffness?: number; damping?: number; precision?: number } };
    children: (interpolatedStyle: { [key: string]: number }) => React.ReactNode;
    onRest?: () => void;
  };

  export class Motion extends React.Component<MotionProps> {}

  // StaggeredMotion
  export type StaggeredMotionProps = {
    defaultStyles?: Array<{ [key: string]: number }>;
    styles: (prevInterpolatedStyles: Array<{ [key: string]: number }>) => Array<{ [key: string]: number | { val: number; stiffness?: number; damping?: number; precision?: number } }>;
    children: (interpolatedStyles: Array<{ [key: string]: number }>) => React.ReactNode;
  };

  export class StaggeredMotion extends React.Component<StaggeredMotionProps> {}

  // TransitionMotion
  export type TransitionStyle = {
    key: string;
    data?: any;
    style: { [key: string]: number | { val: number; stiffness?: number; damping?: number; precision?: number } };
  };

  export type TransitionPlainStyle = {
    key: string;
    data?: any;
    style: { [key: string]: number };
  };

  export type TransitionMotionProps = {
    defaultStyles?: Array<TransitionPlainStyle>;
    styles: Array<TransitionStyle> | ((prevInterpolatedStyles: Array<TransitionPlainStyle>) => Array<TransitionStyle>);
    children: (interpolatedStyles: Array<TransitionPlainStyle>) => React.ReactNode;
    willEnter?: (styleThatEntered: TransitionStyle) => { [key: string]: number };
    willLeave?: (styleThatLeft: TransitionStyle) => { [key: string]: number | { val: number; stiffness?: number; damping?: number; precision?: number } };
    didLeave?: (styleThatLeft: TransitionPlainStyle) => void;
  };

  export class TransitionMotion extends React.Component<TransitionMotionProps> {}

  // Utilities
  export function spring(val: number, config?: { stiffness?: number; damping?: number; precision?: number }): { val: number; stiffness?: number; damping?: number; precision?: number };
  export function presets: {
    noWobble: { stiffness: number; damping: number };
    gentle: { stiffness: number; damping: number };
    wobbly: { stiffness: number; damping: number };
    stiff: { stiffness: number; damping: number };
  };
  export function reorderKeys(obj: { [key: string]: number | { val: number; stiffness?: number; damping?: number; precision?: number } }): { [key: string]: number | { val: number; stiffness?: number; damping?: number; precision?: number } };

  export const Motion: React.ComponentClass<MotionProps>;
  export const StaggeredMotion: React.ComponentClass<StaggeredMotionProps>;
  export const TransitionMotion: React.ComponentClass<TransitionMotionProps>;
}
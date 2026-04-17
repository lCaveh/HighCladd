export interface LightboxState {
  open: boolean;
  src: string;
  alt: string;
}

export interface LightboxProps {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

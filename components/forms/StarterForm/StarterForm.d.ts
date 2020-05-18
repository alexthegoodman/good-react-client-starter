export interface StarterFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface StarterValues {
  artistName: string;
  // firstName: string;
  // lastName: string;
  aboutArtist: string;
  profilePicture: string;
  profilePictureType: string;
  profilePictureSize: number;
  profilePictureData: string;
  favoriteGenre: string;
  gender: string;
  age: string;
  explicit: boolean;
}

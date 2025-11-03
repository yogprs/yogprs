export type DataProject = {
    project_name: string;
    path: string;
    thumbnail_description: string;
    description: string[];
    technology: string;
    year: number;
    link: {
        project?: string,
        github?: {
            fe?: string;
            be?: string;
        }
    }
}

export type SpotifyResponse = {
  data: {
    access_token: string;
  };
};

export type SpotifyPlaying = {
  data: {
    is_playing: boolean;
    timestamp: number;
    context: any;
    progress_ms: number;
    item: {
      album: {
        album_type: string;
        artists: {
          external_urls: {
            spotify: string;
          };
          href: string;
          name: string;
          type: string;
        };
        href: string;
        id: string;
        images: {
          height: number;
          url: string;
          width: number;
        }[];
        name: string;
        release_date: string;
        type: string;
      };
      artists: {
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      duration_ms: number;
      href: string;
      id: string;
      name: string;
      type: string;
    };
  };
};
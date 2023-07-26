export interface PodcastTableItem {
  _id: string;
  image: string;
  name: string;
  author: string;
  episodes: number;
  last_pub_date: Date;
}

export interface PodcastDetailItem {
  label: string
  value: string
}

export interface PodcastEpisodeTableItem {
  _id: string;
  image: string;
  title: string;
  episode_type: string;
  episode: string;
  season: string;
  duration: number;
  pub_date: Date;
  enclosure_url: string;
  podcast_id: string;
}
export type TypeFilmData = {
    descr: {
      title: string;
      poster_path: string;
      production_countries: [{ name: string }];
      release_date: number;
      genres: [{ name: string }];
      budget: number;
      revenue: number;
      runtime: number;
    };
    cred: {
      id: number;
      cast: [
        {
          cast_id: number;
          name: string;
          known_for_department: string;
        }
      ];
    };
  };

export interface Actor {
  cast_id: number,
  name: string, 
  known_for_department: string
}
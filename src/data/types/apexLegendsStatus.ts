export interface Badge {
  name: string;
  value: number;
}

export interface ApexLegendsStatus {
  global: {
    name: string;
    uid: string;
    rank: {
      rankScore: number;
      rankName: string;
      rankDiv: string;
      rankImg: string;
    };
    badges?: Badge[];
  };
}

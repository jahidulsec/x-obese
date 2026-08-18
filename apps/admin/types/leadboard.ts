export type MarathonLeadboardMultiProps = {
  id: string;
  marathonId: string;
  distanceKm: number;
  durationMs: number;
  fullName: string;
  image: string | null;
  imagePath: string | null;
  submission_count: number;
  rank: number;
};

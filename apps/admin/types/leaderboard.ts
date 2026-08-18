export type MarathonLeadboardMultiProps = {
  id: string;
  marathonId: string;
  distanceKm: number;
  durationMs: number;
  submissionCount: number;
  fullName: string;
  image: string | null;
  imagePath: string | null;
  rank: number;
};

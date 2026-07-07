import leaderboardUrl from "@/assets/disciplines/leaderboard.png";

export default function LeaderboardGraphic() {
  return (
    <img
      src={leaderboardUrl}
      alt="Leaderboard showing the top ranked players and their scores"
      className="w-full object-contain"
    />
  );
}
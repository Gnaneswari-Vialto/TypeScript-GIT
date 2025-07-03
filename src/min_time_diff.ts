class TimeDifference 
{
  private times: string[];

  constructor(times: string[]) 
  {
    this.times = times;
  }

  private toMinutes(time: string): number 
  {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }

  public findMinDifference(): number 
  {
    const minutes: number[] = this.times.map(t => this.toMinutes(t));
    minutes.sort((a, b) => a - b);

    let min: number = Infinity;

    for (let i = 1; i < minutes.length; i++) 
    {
      const diff = minutes[i] - minutes[i - 1];
      if (diff < min) 
      {
        min = diff;
      }
    }

    const endToStart = (minutes[0] + 1440) - minutes[minutes.length - 1];
    if (endToStart < min) 
    {
      min = endToStart;
    }

    return min;
  }
}
const times: string[] = ["23:59", "00:00"];
const diff = new TimeDifference(times);
console.log(diff.findMinDifference());
